import { createComponentWithRef } from 'utils/component';
import { Icon } from 'components/foundations/Icon';

import { StyledIconButton } from './styles';
import { IconButtonElement_t, IconButtonProps_t } from './types';

interface IconButtonComponents_t {
  Styled: typeof StyledIconButton;
}

export const IconButton = createComponentWithRef<
  IconButtonElement_t,
  IconButtonProps_t,
  IconButtonComponents_t
>(({ icon, label, ...rest }, forwardedRef) => {
  return (
    <StyledIconButton ref={forwardedRef} {...rest} aria-label={label}>
      <Icon icon={icon} size="2x" />
    </StyledIconButton>
  );
});

IconButton.Styled = StyledIconButton;
