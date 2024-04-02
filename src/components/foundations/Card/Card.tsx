import { StyledCard } from 'components/foundations/Card/styles';
import { CardElement_t, CardProps_t } from 'components/foundations/Card/types';
import { createComponentWithRef } from 'utils/component';

export const Card = createComponentWithRef<CardElement_t, CardProps_t>(
  ({ isPadded = true, ...rest }, forwardedRef) => {
    return <StyledCard ref={forwardedRef} {...rest} isPadded={isPadded} />;
  },
);
