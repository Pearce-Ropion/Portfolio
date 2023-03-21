import { ElementRef } from 'react';
import { SegmentEvent } from '@segment/analytics-next';

import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { StyledButton } from 'components/foundations/Button/styles';
import { useComposedEvent } from 'utils/hooks/useComposedEvent';

export type ButtonElement_t = ElementRef<typeof StyledButton>;
export interface ButtonProps_t
  extends OmitComponentVariantProps_t<typeof StyledButton> {
  disabled?: boolean;
  fullWidth?: boolean;
  inverted?: boolean;
  segment?: SegmentEvent;
  variant?: 'primary' | 'secondary';
}

export const Button = createComponentWithRef<ButtonElement_t, ButtonProps_t>(
  ({ onClick, segment, variant = 'primary', ...rest }, forwardedRef) => {
    const handleClick = useComposedEvent(onClick, use);
    return <StyledButton ref={forwardedRef} {...rest} variant={variant} />;
  },
);

Button.defaultProps = {
  variant: 'primary',
};
