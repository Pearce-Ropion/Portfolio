import { createComponentWithRef } from 'utils/component';

import { StyledBox } from './styles';
import { BoxElement_t, BoxProps_t } from './types';

export interface BoxComponents_t {
  Styled: typeof StyledBox;
}

export const Box = createComponentWithRef<
  BoxElement_t,
  BoxProps_t,
  BoxComponents_t
>((props, forwardedRef) => {
  return <StyledBox ref={forwardedRef} {...props} />;
});

Box.Styled = StyledBox;
