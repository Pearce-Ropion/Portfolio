import { ElementRef, useMemo } from 'react';

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
import { lookupIcon } from 'components/foundations/Icon/util';

export type IconElement_t = ElementRef<typeof StandardIcon>;
export interface IconProps_t extends StandardIconProps_t, DuotoneIconProps_t {
  duotone?: boolean;
}

interface IconComponents_t {
  Styled: typeof StyledIcon;
  Standard: typeof StandardIcon;
  Duotone: typeof DuotoneIcon;
}

export const Icon = createComponentWithRef<
  IconElement_t,
  IconProps_t,
  IconComponents_t
>(({ duotone: duotoneProp, icon, prefix, ...rest }, forwardedRef) => {
  const duotone = useMemo(() => {
    if (duotoneProp) return duotoneProp;
    if (prefix) return prefix === 'fad';

    return lookupIcon(icon).prefix === 'fad';
  }, [duotoneProp, icon, prefix]);

  const Component = duotone ? DuotoneIcon : StandardIcon;
  return <Component ref={forwardedRef} {...rest} icon={icon} prefix={prefix} />;
});

Icon.Styled = StyledIcon;
Icon.Standard = StandardIcon;
Icon.Duotone = DuotoneIcon;
