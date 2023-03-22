import { ElementRef } from 'react';

import {
  DuotoneIcon,
  DuotoneIconProps_t,
} from 'components/foundations/Icon/DuotoneIcon';
import {
  StandardIcon,
  StandardIconProps_t,
} from 'components/foundations/Icon/StandardIcon';
import { createComponentWithRef } from 'utils/component';

export type IconElement_t = ElementRef<typeof StandardIcon>;
export interface IconProps_t extends StandardIconProps_t, DuotoneIconProps_t {
  duotone?: boolean;
}

export const Icon = createComponentWithRef<IconElement_t, IconProps_t>(
  ({ duotone, ...rest }, forwardedRef) => {
    if (duotone) {
      return <DuotoneIcon ref={forwardedRef} {...rest} />;
    }

    return <StandardIcon ref={forwardedRef} {...rest} />;
  },
);
