import { CSSProperties, ElementRef, useMemo } from 'react';
import { startCase } from 'lodash';

import type { PropertyValue_t } from 'types/stitches';
import { mergeStyle } from 'utils/style/css';
import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { StyledIcon } from 'components/foundations/Icon/styles';
import {
  IconLookupProps_t,
  iconToIconLookup,
} from 'components/foundations/Icon/util';

declare module 'react' {
  interface CSSProperties {
    '--fa-main-color'?: PropertyValue_t<'color'>;
    '--fa-main-opacity'?: PropertyValue_t<'opacity'>;
  }
}

export type StandardIconElement_t = ElementRef<typeof StyledIcon>;
export interface StandardIconProps_t
  extends Omit<
      OmitComponentVariantProps_t<typeof StyledIcon>,
      'color' | 'icon' | 'opacity'
    >,
    IconLookupProps_t {
  color?: PropertyValue_t<'color'>;
  opacity?: PropertyValue_t<'opacity'>;
  padded?: 'left' | 'right' | 'both';
}

export const StandardIcon = createComponentWithRef<
  StandardIconElement_t,
  StandardIconProps_t
>(
  (
    {
      color,
      icon,
      opacity,
      prefix,
      style: styleProp,
      title: titleProp,
      ...rest
    },
    forwardedRef,
  ) => {
    const iconLookup = useMemo(() => {
      return iconToIconLookup(icon, prefix);
    }, [icon, prefix]);

    const title = useMemo(() => {
      if (titleProp) return titleProp;
      return `${startCase(iconLookup.iconName)} Icon`;
    }, [iconLookup, titleProp]);

    const style = useMemo<CSSProperties>(() => {
      return mergeStyle(styleProp, {
        ...(color && {
          '--fa-main-color': color,
        }),
        ...(opacity && {
          '--fa-main-opacity': opacity,
        }),
      });
    }, [color, opacity, styleProp]);

    return (
      <StyledIcon
        ref={forwardedRef}
        {...rest}
        icon={iconLookup}
        style={style}
        title={title}
      />
    );
  },
);
