import { forwardRef, memo } from 'react';

import {
  DuotoneIcon,
  DuotoneIconProps_t,
} from 'components/foundations/Icon/DuotoneIcon';
import { StandardIcon } from 'components/foundations/Icon/StandardIcon';
import { IconElement_t } from 'components/foundations/Icon/util';
import { MemoForwardRefComponent_t } from 'types/component';

export interface IconProps_t extends DuotoneIconProps_t {
  duotone?: boolean;
}

export type Icon_t = MemoForwardRefComponent_t<
  IconElement_t,
  IconProps_t,
  {
    Standard: typeof StandardIcon;
    Duotone: typeof DuotoneIcon;
  }
>;

export const Icon: Icon_t = memo(
  forwardRef<IconElement_t, IconProps_t>(({ duotone, ...rest }, ref) => {
    if (duotone) {
      return <DuotoneIcon ref={ref} {...rest} />;
    }

    return <StandardIcon ref={ref} {...rest} />;
  }),
) as Icon_t;

Icon.Standard = StandardIcon;
Icon.Duotone = DuotoneIcon;
