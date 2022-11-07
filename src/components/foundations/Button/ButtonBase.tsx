import { forwardRef, memo } from 'react';
import { SegmentEvent } from '@segment/analytics-next';

import {
  Button as Primitive,
  ButtonProps_t as PrimitiveProps_t,
} from 'components/foundations/Html';
import { BUTTON_TRACK_EVENT_NAME } from 'components/foundations/Button/util';
import { useEventHandler } from 'utils/hooks/useEventHandler';
import { useAnalyticsTrack } from 'components/contexts/Analytics';

export interface ButtonBaseProps_t extends PrimitiveProps_t {
  segment?: SegmentEvent;
}

export const ButtonBase = memo(
  forwardRef<HTMLButtonElement, ButtonBaseProps_t>(
    ({ children, disabled, onClick, segment, ...rest }, ref) => {
      const handleClick = useEventHandler(
        disabled,
        onClick,
        useAnalyticsTrack(BUTTON_TRACK_EVENT_NAME, segment),
      );

      return (
        <Primitive
          ref={ref}
          {...rest}
          disabled={disabled}
          onClick={handleClick}
        >
          {children}
        </Primitive>
      );
    },
  ),
);
