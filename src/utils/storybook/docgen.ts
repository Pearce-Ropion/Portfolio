import type { PropsWithChildren, FC, VFC } from 'react';
import type { ComponentDoc } from 'react-docgen-typescript';

import type { StyledProps_t } from 'utils/variants';

declare module 'react-docgen-typescript' {
  interface ComponentDoc {
    isModified?: boolean;
  }
}

interface DocgenEnumValue_t {
  value: string;
}

// Uses FC or VFC based on whether the incoming props include `children`
type Component_t<P> = (P extends PropsWithChildren<P> ? FC<P> : VFC<P>) & {
  __docgenInfo?: ComponentDoc;
};

function isDocgenModified<P>(component: Component_t<P>): boolean {
  return Boolean(component.__docgenInfo && component.__docgenInfo?.isModified);
}

/**
 * @function modifyStoryComponentProps
 * @description Stitches variants allow passing an object for any variant that
 * contains specific variant values to use at different media query breakpoints.
 * `react-docgen-typescript` parses these types as valid string options for the
 * variant enum. This is confusing as the stringified object isn't a valid
 * variant option for controls in the storybook and it makes it difficult
 * to understand which values are actually valid for a variant.
 *
 * @param {Component_t} component - the component the storybook is for
 */
function modifyStoryComponentProps<P extends Record<string, unknown>>(
  component: Component_t<P>,
): void {
  if (!isDocgenModified(component)) {
    if (component.__docgenInfo) component.__docgenInfo.isModified = true;

    for (const propInfo of Object.values(component.__docgenInfo?.props || [])) {
      if (propInfo.type.name === 'enum') {
        const propValue: DocgenEnumValue_t[] = propInfo.type.value;

        if (component.defaultProps) {
          if (
            component.defaultProps[propInfo.name] !== undefined &&
            [undefined, null].includes(propInfo.defaultValue)
          ) {
            propInfo.defaultValue = component.defaultProps[propInfo.name];
          }
        }

        propInfo.type.value = propValue.filter(enumValue => {
          // remove any enum options that consist of a stringified object
          return !enumValue.value.startsWith('{');
        });

        /**
         * react-docgen-typescript doesn't resolve boolean props correctly
         * @see https://github.com/styleguidist/react-docgen-typescript/issues/322
         */
        const isBoolean =
          propValue.some(enumValue => enumValue.value === 'true') &&
          propValue.some(enumValue => enumValue.value === 'false');

        if (isBoolean) {
          propInfo.type.name = 'boolean';
          propInfo.type.value = undefined;
        }
      }
    }
  }
}

/**
 * @function mkStoryComponent
 * @description Remaps the static and generated types of a component such that the
 *  controls that storybook generates do not include confusing type info.
 *
 * @param {Component_t} component - the component the storybook is for
 * @returns {Component_t}
 */
export function mkStoryComponent<V, P extends Record<string, unknown>>(
  component: Component_t<P>,
) {
  if (!isDocgenModified<P>(component)) {
    modifyStoryComponentProps<P>(component);
  }

  return component as unknown as Component_t<StyledProps_t<V, P>>;
}

/**
 * @function getPropNames
 * @description Gets a list of a component's prop names from its generated
 *   docgen information. Only works in storybook
 *
 * @param {Component_t} component - the component the storybook is for
 * @returns {string[]}
 */
export function getPropNames<P extends Record<string, unknown>>(
  component: Component_t<P>,
): string[] {
  if (!isDocgenModified<P>(component)) {
    modifyStoryComponentProps<P>(component);
  }

  const props = component.__docgenInfo?.props || {};
  return Object.keys(props) || [];
}

/**
 * @function getVariantOptions
 * @description Gets the valid enum options for any component prop that has enum
 *   values. Uses the component's generated docgen. Only works in storybook
 *
 * @param {Component_t} component - the component the storybook is for
 * @returns {string[]}
 */
export function getVariantOptions<V, P extends Record<string, unknown>>(
  component: Component_t<P>,
): Record<keyof V, string[]> {
  if (!isDocgenModified<P>(component)) {
    modifyStoryComponentProps<P>(component);
  }

  const props = component.__docgenInfo?.props || {};
  const variants = {} as Record<keyof V, string[]>;

  for (const propInfo of Object.values(props)) {
    const name = propInfo.name as keyof V;
    const { type } = propInfo;

    if (type.name === 'boolean') {
      variants[name] = ['true', 'false'];
    } else if (type.name === 'enum') {
      variants[name] = (type.value as DocgenEnumValue_t[]).map(({ value }) =>
        value.replace(/"/g, ''),
      );
    }
  }

  return variants;
}
