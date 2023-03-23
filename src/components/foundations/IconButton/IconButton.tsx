import { ElementRef } from 'react';

import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { StyledIconButton } from 'components/foundations/IconButton/styles';
import { IconLookupProps_t } from 'components/foundations/Icon/util';
import { Icon } from 'components/foundations/Icon';
import { theme } from 'stitches.config';

export type IconButtonElement_t = ElementRef<typeof StyledIconButton>;
export interface IconButtonProps_t
  extends Omit<OmitComponentVariantProps_t<typeof StyledIconButton>, 'prefix'>,
    Omit<IconLookupProps_t, 'prefix'> {
  label: string;
  prefix?: Extract<IconLookupProps_t['prefix'], 'fas' | 'fab'>;
}

export const IconButton = createComponentWithRef<
  IconButtonElement_t,
  IconButtonProps_t
>(({ icon, label, prefix = 'fas', ...rest }, forwardedRef) => {
  return (
    <StyledIconButton ref={forwardedRef} aria-label={label} {...rest}>
      <Icon
        icon={icon}
        prefix={prefix}
        color={theme.colors.neutral0.value}
        size="2x"
      />
    </StyledIconButton>
  );
});

IconButton.defaultProps = {
  prefix: 'fas',
};
