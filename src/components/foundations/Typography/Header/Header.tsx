import { createComponentWithRef } from 'utils/component';

import { StyledHeader } from './styles';
import { HeaderElement_t, HeaderProps_t } from './types';

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
