import { StyledCard } from 'components/foundations/Card/styles';
import { HTMLDivElement_t, HTMLDivProps_t } from 'components/foundations/Html';
import { createComponentWithRef } from 'utils/component';

export type CardElement_t = HTMLDivElement_t;
export interface CardProps_t extends HTMLDivProps_t {
  bordered?: boolean;
  inverted?: boolean;
  padded?: boolean;
}

export interface CardComponents_t {
  Styled: typeof StyledCard;
}

export const Card = createComponentWithRef<
  CardElement_t,
  CardProps_t,
  CardComponents_t
>(({ padded = true, ...rest }, forwardedRef) => {
  return <StyledCard ref={forwardedRef} {...rest} padded={padded} />;
});

Card.defaultProps = {
  padded: true,
};

Card.Styled = StyledCard;
