import { CSSProperties, ElementRef, useMemo } from 'react';
import { startCase } from 'lodash';

import type { PropertyValue_t } from 'types/stitches';
import { mergeStyle } from 'utils/style/css';
import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { StyledIcon } from 'components/foundations/Icon/styles';

declare module 'react' {
  interface CSSProperties {
    '--fa-primary-color'?: PropertyValue_t<'color'>;
    '--fa-primary-opacity'?: PropertyValue_t<'opacity'>;
  }
}

export type StandardIconElement_t = ElementRef<typeof StyledIcon>;
export interface StandardIconProps_t
  extends Omit<
    OmitComponentVariantProps_t<typeof StyledIcon>,
    'color' | 'opacity'
  > {
  color?: PropertyValue_t<'color'>;
  opacity?: PropertyValue_t<'opacity'>;
  padded?: 'left' | 'right' | 'both';
}

export const StandardIcon = createComponentWithRef<
  StandardIconElement_t,
  StandardIconProps_t
>(
  (
    { color, icon, opacity, style: styleProp, title: titleProp, ...rest },
    forwardedRef,
  ) => {
    const title = useMemo(() => {
      if (titleProp) return titleProp;

      let iconName: string | undefined;
      if (typeof icon === 'string') {
        iconName = icon;
      } else if (Array.isArray(icon)) {
        iconName = icon[1];
      } else {
        iconName = icon.iconName;
      }

      return `${startCase(iconName)} Icon`;
    }, [icon, titleProp]);

    const style = useMemo<CSSProperties>(() => {
      return mergeStyle(styleProp, {
        ...(color && {
          '--fa-primary-color': color,
        }),
        ...(opacity && {
          '--fa-primary-opacity': opacity,
        }),
      });
    }, [color, opacity, styleProp]);

    return (
      <StyledIcon
        ref={forwardedRef}
        {...rest}
        icon={icon}
        style={style}
        title={title}
      />
    );
  },
);
