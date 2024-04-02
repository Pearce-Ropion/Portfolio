import { useCallback } from 'react';

import { createComponentWithRef } from 'utils/component';
import { useAnalyticsEvent } from 'components/contexts';
import { useComposedCallback } from 'utils/hooks';

import { StyledButton } from './styles';
import { ButtonElement_t, ButtonProps_t } from './types';

interface ButtonComponents_t {
  Styled: typeof StyledButton;
}

export const Button = createComponentWithRef<
  ButtonElement_t,
  ButtonProps_t,
  ButtonComponents_t
>(
  (
    { isDisabled, onClick, segment, variant = 'primary', ...rest },
    forwardedRef,
  ) => {
    const handleClickEvent = useAnalyticsEvent('button-click', segment);

    const handleClick = useComposedCallback(
      onClick,
      useCallback(() => handleClickEvent(), [handleClickEvent]),
      { disabled: isDisabled },
    );

    return (
      <StyledButton
        ref={forwardedRef}
        {...rest}
        disabled={isDisabled}
        isDisabled={isDisabled}
        onClick={handleClick}
        variant={variant}
      />
    );
  },
);

Button.Styled = StyledButton;
