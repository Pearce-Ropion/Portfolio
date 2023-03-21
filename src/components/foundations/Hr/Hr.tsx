import { ElementRef } from 'react';

import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { StyledHr } from 'components/foundations/Hr/styles';

export type HrElement_t = ElementRef<typeof StyledHr>;
export interface HrProps_t
  extends OmitComponentVariantProps_t<typeof StyledHr> {
  inverted?: boolean;
  direction?: 'horizontal' | 'vertical';
}

export const Hr = createComponentWithRef<HrElement_t, HrProps_t>(
  ({ direction = 'horizontal', ...rest }, forwardedRef) => {
    return <StyledHr ref={forwardedRef} {...rest} direction={direction} />;
  },
);

Hr.defaultProps = {
  direction: 'horizontal',
};
