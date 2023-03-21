import { ElementRef } from 'react';

import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { StyledTypography } from 'components/foundations/Typography/styles';

export type TypographyElement_t = ElementRef<typeof StyledTypography>;
export interface TypographyProps_t
  extends OmitComponentVariantProps_t<typeof StyledTypography> {
  align?: 'left' | 'center' | 'right';
  inline?: boolean;
  inverted?: boolean;
  italic?: boolean;
  truncate?: boolean;
  noWrap?: boolean;
}

export const Typography = createComponentWithRef<
  TypographyElement_t,
  TypographyProps_t
>((props, forwardedRef) => {
  return <StyledTypography ref={forwardedRef} {...props} />;
});
