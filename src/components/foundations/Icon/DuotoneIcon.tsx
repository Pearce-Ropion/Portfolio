import { CSSProperties, ElementRef, useMemo } from 'react';

import {
  StandardIcon,
  StandardIconProps_t,
} from 'components/foundations/Icon/StandardIcon';
import { PropertyValue_t } from 'types/stitches';
import { cx } from 'utils/style/classes';
import { createComponentWithRef } from 'utils/component';
import { mergeStyle } from 'utils/style/css';

declare module 'react' {
  interface CSSProperties {
    '--fa-primary-color'?: PropertyValue_t<'color'>;
    '--fa-primary-opacity'?: PropertyValue_t<'opacity'>;
    '--fa-secondary-color'?: PropertyValue_t<'color'>;
    '--fa-secondary-opacity'?: PropertyValue_t<'opacity'>;
  }
}

export type DuotoneIconElement_t = ElementRef<typeof StandardIcon>;
export interface DuotoneIconProps_t extends StandardIconProps_t {
  primaryColor?: PropertyValue_t<'color'>;
  primaryOpacity?: PropertyValue_t<'opacity'>;
  secondaryColor?: PropertyValue_t<'color'>;
  secondaryOpacity?: PropertyValue_t<'opacity'>;
  swapOpacity?: boolean;
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
      const faPrimaryColor = color || primaryColor;
      const faPrimaryOpacity = opacity || primaryOpacity;
      const faSecondaryColor = color || secondaryColor;
      const faSecondaryOpacity = opacity || secondaryOpacity;

      return mergeStyle(styleProp, {
        ...(faPrimaryColor && {
          '--fa-primary-color': faPrimaryColor,
        }),
        ...(faPrimaryOpacity && {
          '--fa-primary-opacity': faPrimaryOpacity,
        }),
        ...(faSecondaryColor && {
          '--fa-secondary-color': faSecondaryColor,
        }),
        ...(faSecondaryOpacity && {
          '--fa-secondary-opacity': faSecondaryOpacity,
        }),
      });
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
