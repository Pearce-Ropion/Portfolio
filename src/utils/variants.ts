import type { ComponentProps, VariantProps } from '@stitches/react';
import type { StyledComponent } from '@stitches/react/types/styled-component';

const NUMBER_REGEX = /^\d+(\.\d+)?$/;

/**
 * @private
 * @constant {symbol} StitchesInternalSymbol
 * @description An internal symbol used by Stitches to maintain the composers
 * used by a styled component. This is similar to emotion's `__base_tag__`
 * variable. This symbol should ideally not be used as it requires in depth
 * knowledge of how Stitches builds its styled components.
 */
const StitchesInternalSymbol = Symbol.for('sxs.internal');

// Stitches adds the ability to set a prop as an object with `@inital` or `@media`
// properties but they aren't necessary for most interactions with styled types
interface StitchesInitialOrMedia_t {
  [x: string]: any;
}

// We exclude `true` and `false` strings as well since Stitches adds these
// and they aren't necessary most interactions with styled types
type StitchesPropsToExclude_t = 'true' | 'false' | StitchesInitialOrMedia_t;

type ExcludeTransformProps<V> = {
  [Property in keyof V]: Exclude<V[Property], StitchesPropsToExclude_t>;
};

export type StyledProps_t<V, P> = Omit<P, keyof V> & ExcludeTransformProps<V>;
export type StyledComponentProps_t<C extends StyledComponent<any>> =
  StyledProps_t<VariantProps<C>, ComponentProps<C>>;

/**
 * @function getDefaultVariants
 * @description Gets the default variants of a styled component. Uses a hidden
 * internal system on Stitches. This is not an official API and should not be
 * used outside of this use case.
 *
 * @param {ReactElement} component - Must be a `styled` compoennt
 * @returns The default variants, if any of a styled component
 */
export function getDefaultVariants<C extends StyledComponent<any>>(
  component: C,
): ExcludeTransformProps<VariantProps<C>> {
  type DefaultVariants_t = {
    [Prop in keyof ExcludeTransformProps<VariantProps<C>>]:
      | string
      | boolean
      | number;
  };

  // @ts-ignore - Symbol is not a valid prop on React element internface - it is injected by Stitches
  const composers = component[StitchesInternalSymbol].composers;
  const defaultVariants = {} as DefaultVariants_t;

  for (const composer of composers) {
    if (Array.isArray(composer)) {
      // default variants are always index 4 in the composer array
      // https://github.com/stitchesjs/stitches/blob/main/packages/core/src/features/css.js#L140
      const defaultVariantComposer = composer[4];

      if (defaultVariantComposer) {
        for (const [key, defaultValue] of Object.entries<string>(
          defaultVariantComposer,
        )) {
          const variant = key as keyof DefaultVariants_t;

          if (defaultValue === 'true') {
            defaultVariants[variant] = true;
          } else if (defaultValue === 'false') {
            defaultVariants[variant] = false;
          } else if (NUMBER_REGEX.test(defaultValue)) {
            defaultVariants[variant] = parseFloat(defaultValue);
          } else if (defaultValue && defaultValue !== 'undefined') {
            defaultVariants[variant] = defaultValue;
          }
        }
      }
    }
  }

  return defaultVariants as ExcludeTransformProps<VariantProps<C>>;
}
