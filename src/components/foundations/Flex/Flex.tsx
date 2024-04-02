import { createComponentWithRef } from 'utils/component';

import { StyledFlex } from './styles';
import { FlexElement_t, FlexProps_t } from './types';

export interface FlexComponents_t {
  Styled: typeof StyledFlex;
}

export const Flex = createComponentWithRef<
  FlexElement_t,
  FlexProps_t,
  FlexComponents_t
>((props, forwardedRef) => {
  return <StyledFlex ref={forwardedRef} {...props} />;
});

Flex.Styled = StyledFlex;
