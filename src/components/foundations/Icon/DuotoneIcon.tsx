import { CSSProperties, useMemo } from 'react';

import { PropertyValue_t } from 'types/stitches';
import { cx } from 'utils/style/classes';
import { createComponentWithRef } from 'utils/component';
import { mergeStyle } from 'utils/hooks';
import { tokenToVariable } from 'utils/style/tokens';

import { StandardIcon } from './StandardIcon';
import { DuotoneIconElement_t, DuotoneIconProps_t } from './types/duotone';

declare module 'react' {
  interface CSSProperties {
    '--fa-primary-color'?: PropertyValue_t<'color'>;
    '--fa-primary-opacity'?: PropertyValue_t<'opacity'>;
    '--fa-secondary-color'?: PropertyValue_t<'color'>;
    '--fa-secondary-opacity'?: PropertyValue_t<'opacity'>;
  }
}

export const DuotoneIcon = createComponentWithRef<
  DuotoneIconElement_t,
  DuotoneIconProps_t
>(
  (
    {
      className,
      color,
      opacity,
      primaryColor,
      primaryOpacity,
      secondaryColor,
      secondaryOpacity,
      style: styleProp,
      swapOpacity,
      ...rest
    },
    forwardedRef,
  ) => {
    const classes = useMemo(() => {
      return cx(className, {
        'fa-swap-opacity': swapOpacity,
      });
    }, [className, swapOpacity]);

    const styles = useMemo<CSSProperties>(() => {
      const faPrimaryColor = color ?? primaryColor;
      const faPrimaryOpacity = opacity ?? primaryOpacity;
      const faSecondaryColor = color ?? secondaryColor;
      const faSecondaryOpacity = opacity ?? secondaryOpacity;

      return mergeStyle(
        styleProp,
        faPrimaryColor && {
          '--fa-primary-color': tokenToVariable(faPrimaryColor),
        },
        faPrimaryOpacity && {
          '--fa-primary-opacity': faPrimaryOpacity,
        },
        faSecondaryColor && {
          '--fa-secondary-color': tokenToVariable(faSecondaryColor),
        },
        faSecondaryOpacity && {
          '--fa-secondary-opacity': faSecondaryOpacity,
        },
      );
    }, [
      styleProp,
      color,
      opacity,
      primaryColor,
      primaryOpacity,
      secondaryColor,
      secondaryOpacity,
    ]);

    return (
      <StandardIcon
        ref={forwardedRef}
        {...rest}
        className={classes}
        style={styles}
      />
    );
  },
);
