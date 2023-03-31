import { ElementRef } from 'react';

import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { StyledIconButton } from 'components/foundations/IconButton/styles';
import { IconLookupProps_t } from 'components/foundations/Icon/util';
import { Icon } from 'components/foundations/Icon';
import { theme } from 'stitches.config';
import { SegmentEvent_t } from 'utils/events';
import { useAnalyticsEvent } from 'components/contexts';
import { useComposedEvent } from 'utils/hooks/useComposedEvent';

export type IconButtonElement_t = ElementRef<typeof StyledIconButton>;
export interface IconButtonProps_t
  extends Omit<OmitComponentVariantProps_t<typeof StyledIconButton>, 'prefix'>,
    Omit<IconLookupProps_t, 'prefix'> {
  disabled?: boolean;
  inverted?: boolean;
  label: string;
  prefix?: Extract<IconLookupProps_t['prefix'], 'fas' | 'fab'>;
  segment?: SegmentEvent_t;
}

interface IconButtonComponents_t {
  Styled: typeof StyledIconButton;
}

export const IconButton = createComponentWithRef<
  IconButtonElement_t,
  IconButtonProps_t,
  IconButtonComponents_t
>(
  (
    { icon, label, onClick, prefix = 'fas', segment, ...rest },
    forwardedRef,
  ) => {
    const handleClick = useComposedEvent(
      onClick,
      useAnalyticsEvent('button-click', segment),
    );

    return (
      <StyledIconButton
        ref={forwardedRef}
        aria-label={label}
        {...rest}
        onClick={handleClick}
      >
        <Icon
          icon={icon}
          prefix={prefix}
          color={theme.colors.neutral0.value}
          size="2x"
        />
      </StyledIconButton>
    );
  },
);

IconButton.defaultProps = {
  prefix: 'fas',
};

IconButton.Styled = StyledIconButton;
