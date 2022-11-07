import { CSSProperties, forwardRef, memo, useMemo } from 'react';

import {
  StandardIcon,
  StandardIconProps_t,
} from 'components/foundations/Icon/StandardIcon';
import { IconElement_t } from 'components/foundations/Icon/util';
import { PropertyValue_t } from 'types/stitches';
import { cx } from 'utils/style/classes';

declare module 'react' {
  interface CSSProperties {
    '--fa-primary-color'?: PropertyValue_t<'color'>;
    '--fa-primary-opacity'?: PropertyValue_t<'opacity'>;
    '--fa-secondary-color'?: PropertyValue_t<'color'>;
    '--fa-secondary-opacity'?: PropertyValue_t<'opacity'>;
  }
}

export interface DuotoneIconProps_t extends StandardIconProps_t {
  primaryColor?: PropertyValue_t<'color'>;
  primaryOpacity?: PropertyValue_t<'opacity'>;
  secondaryColor?: PropertyValue_t<'color'>;
  secondaryOpacity?: PropertyValue_t<'opacity'>;
  swapOpacity?: boolean;
}

export const DuotoneIcon = memo(
  forwardRef<IconElement_t, DuotoneIconProps_t>(
    (
      {
        className,
        color,
        opacity,
        primaryColor,
        primaryOpacity,
        secondaryColor,
        secondaryOpacity,
        style,
        swapOpacity,
        ...rest
      },
      ref,
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

        return {
          ...style,
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
        };
      }, [
        style,
        color,
        opacity,
        primaryColor,
        primaryOpacity,
        secondaryColor,
        secondaryOpacity,
      ]);

      return (
        <StandardIcon ref={ref} {...rest} className={classes} style={styles} />
      );
    },
  ),
);
