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
export interface IconProps_t extends StandardIconProps_t, DuotoneIconProps_t {
  duotone?: boolean;
}

interface IconComponents {
  Styled: typeof StyledIcon;
  Standard: typeof StandardIcon;
  Duotone: typeof DuotoneIcon;
}

export const Icon = createComponentWithRef<
  IconElement_t,
  IconProps_t,
  IconComponents
>(({ duotone, ...rest }, forwardedRef) => {
  if (duotone) {
    return <DuotoneIcon ref={forwardedRef} {...rest} />;
  }

  return <StandardIcon ref={forwardedRef} {...rest} />;
});

Icon.Styled = StyledIcon;
Icon.Standard = StandardIcon;
Icon.Duotone = DuotoneIcon;
