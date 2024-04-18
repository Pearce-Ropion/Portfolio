import { createComponentWithRef } from 'utils/component';

import { StyledButton } from './styles';
import { ButtonElement_t, ButtonProps_t } from './types';

interface ButtonComponents_t {
  Styled: typeof StyledButton;
}

export const Button = createComponentWithRef<
  ButtonElement_t,
  ButtonProps_t,
  ButtonComponents_t
>(({ isDisabled, variant = 'primary', ...rest }, forwardedRef) => {
  return (
    <StyledButton
      ref={forwardedRef}
      {...rest}
      isDisabled={isDisabled}
      variant={variant}
    />
  );
});

Button.Styled = StyledButton;
