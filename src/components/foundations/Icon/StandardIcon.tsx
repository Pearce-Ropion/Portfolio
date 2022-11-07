import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { startCase } from 'lodash';
import { forwardRef, memo, useMemo } from 'react';

import type { CSSObject_t, PropertyValue_t } from 'types/stitches';
import { cx } from 'utils/style/classes';
import {
  getIconStyle,
  IconElement_t,
  IconVariants_t,
} from 'components/foundations/Icon/util';
import { mergeCSS } from 'utils/style/css';

export interface StandardIconProps_t
  extends Omit<FontAwesomeIconProps, 'color' | 'opacity'>,
    IconVariants_t {
  css?: CSSObject_t;
  color?: PropertyValue_t<'color'>;
  opacity?: PropertyValue_t<'opacity'>;
}

export const StandardIcon = memo(
  forwardRef<IconElement_t, StandardIconProps_t>(
    ({ className, color, css, icon, opacity, padded, title, ...rest }, ref) => {
      const classes = useMemo(() => {
        return cx(
          className,
          getIconStyle({
            padded,
            css: mergeCSS(css, {
              color,
              opacity,
            }),
          }),
        );
      }, [className, color, css, opacity, padded]);

      const iconTitle = useMemo(() => {
        if (title) return title;

        let iconName: string | undefined;
        if (typeof icon === 'string') {
          iconName = icon;
        } else if (Array.isArray(icon)) {
          iconName = icon[1];
        } else {
          iconName = icon.iconName;
        }

        return `${startCase(iconName)} Icon`;
      }, [icon, title]);

      return (
        <FontAwesomeIcon
          ref={ref}
          {...rest}
          icon={icon}
          className={classes}
          title={iconTitle}
        />
      );
    },
  ),
);
