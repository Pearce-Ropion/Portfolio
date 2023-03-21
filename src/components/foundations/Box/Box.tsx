import { ElementRef } from 'react';

import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { StyledBox } from 'components/foundations/Box/styles';

export type BoxElement_t = ElementRef<typeof StyledBox>;
export interface BoxProps_t
  extends OmitComponentVariantProps_t<typeof StyledBox> {}

export const Box = createComponentWithRef<BoxElement_t, BoxProps_t>(
  (props, forwardedRef) => {
    return <StyledBox ref={forwardedRef} {...props} />;
  },
);
