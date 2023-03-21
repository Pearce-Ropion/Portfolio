import { ElementRef } from 'react';

import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { StyledCopy } from 'components/foundations/Typography/Copy/styles';

export type CopyElement_t = ElementRef<typeof StyledCopy>;
export interface CopyProps_t
  extends OmitComponentVariantProps_t<typeof StyledCopy> {
  size?: 'small' | 'medium' | 'large';
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'bold' | 'black';
}

export const Copy = createComponentWithRef<CopyElement_t, CopyProps_t>(
  ({ size = 'medium', weight = 'normal', ...rest }, forwardedRef) => {
    return (
      <StyledCopy ref={forwardedRef} {...rest} size={size} weight={weight} />
    );
  },
);

Copy.defaultProps = {
  size: 'medium',
  weight: 'normal',
};
