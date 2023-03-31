import { ElementRef } from 'react';

import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { StyledButton } from 'components/foundations/Button/styles';
import { useComposedEvent } from 'utils/hooks/useComposedEvent';
import { useAnalyticsEvent } from 'components/contexts/Analytics/useAnalytics';
import { SegmentEvent_t } from 'utils/events';

export type ButtonElement_t = ElementRef<typeof StyledButton>;
export interface ButtonProps_t
  extends OmitComponentVariantProps_t<typeof StyledButton> {
  compact?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  inverted?: boolean;
  segment?: SegmentEvent_t;
  variant?: 'primary' | 'secondary';
}

interface ButtonComponents_t {
  Styled: typeof StyledButton;
}

export const Button = createComponentWithRef<
  ButtonElement_t,
  ButtonProps_t,
  ButtonComponents_t
>(({ onClick, segment, variant = 'primary', ...rest }, forwardedRef) => {
  const handleClick = useComposedEvent(
    onClick,
    useAnalyticsEvent('button-click', segment),
  );
  return (
    <StyledButton
      ref={forwardedRef}
      {...rest}
      onClick={handleClick}
      variant={variant}
    />
  );
});

Button.defaultProps = {
  variant: 'primary',
};

Button.Styled = StyledButton;
