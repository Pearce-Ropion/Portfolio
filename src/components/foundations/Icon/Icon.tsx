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
import { StyledIcon } from 'components/foundations/Icon/styles';

export type IconElement_t = ElementRef<typeof StandardIcon>;
export interface IconProps_t extends StandardIconProps_t, DuotoneIconProps_t {}

interface IconComponents {
  Styled: typeof StyledIcon;
}

export const Icon = createComponentWithRef<
  IconElement_t,
  IconProps_t,
  IconComponents
>((props, forwardedRef) => {
  return <DuotoneIcon ref={forwardedRef} {...props} />;
});

Icon.Styled = StyledIcon;
