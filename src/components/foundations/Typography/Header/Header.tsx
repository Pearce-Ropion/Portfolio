import { ElementRef } from 'react';

import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { StyledHeader } from 'components/foundations/Typography/Header/styles';

export type HeaderElement_t = ElementRef<typeof StyledHeader>;
export interface HeaderProps_t
  extends OmitComponentVariantProps_t<typeof StyledHeader> {
  subheader?: boolean;
}

interface HeaderComponents_t {
  Styled: typeof StyledHeader;
}

export const Header = createComponentWithRef<
  HeaderElement_t,
  HeaderProps_t,
  HeaderComponents_t
>((props, forwardedRef) => {
  return <StyledHeader ref={forwardedRef} {...props} />;
});

Header.Styled = StyledHeader;
