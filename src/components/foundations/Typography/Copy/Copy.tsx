import { createComponentWithRef } from 'utils/component';

import { StyledCopy } from './styles';
import { CopyElement_t, CopyProps_t } from './types';

interface CopyComponents_t {
  Styled: typeof StyledCopy;
}

export const Copy = createComponentWithRef<
  CopyElement_t,
  CopyProps_t,
  CopyComponents_t
>(({ size = 'medium', weight = 'normal', ...rest }, forwardedRef) => {
  return (
    <StyledCopy ref={forwardedRef} {...rest} size={size} weight={weight} />
  );
});

Copy.Styled = StyledCopy;
