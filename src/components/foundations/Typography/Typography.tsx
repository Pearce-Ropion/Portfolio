import { createComponentWithRef } from 'utils/component';

import { StyledTypography } from './styles';
import { TypographyElement_t, TypographyProps_t } from './types';

export const Typography = createComponentWithRef<
  TypographyElement_t,
  TypographyProps_t
>((props, forwardedRef) => {
  return <StyledTypography ref={forwardedRef} {...props} />;
});
