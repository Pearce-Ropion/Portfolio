import { useMemo } from 'react';

import { createComponentWithRef } from 'utils/component';

import { DuotoneIcon } from './DuotoneIcon';
import { StandardIcon } from './StandardIcon';
import { StyledIcon } from './styles';
import { lookupIcon } from './lookup';
import { IconElement_t, IconProps_t } from './types/icon';

interface IconComponents_t {
  Styled: typeof StyledIcon;
  Standard: typeof StandardIcon;
  Duotone: typeof DuotoneIcon;
}

export const Icon = createComponentWithRef<
  IconElement_t,
  IconProps_t,
  IconComponents_t
>(({ isDuotone: isDuotoneProp, icon, ...rest }, forwardedRef) => {
  const isDuotone = useMemo(() => {
    if (isDuotoneProp !== undefined) return isDuotoneProp;
    return lookupIcon(icon).prefix === 'fad';
  }, [isDuotoneProp, icon]);

  const Component = isDuotone ? DuotoneIcon : StandardIcon;
  return <Component ref={forwardedRef} {...rest} icon={icon} />;
});

Icon.Styled = StyledIcon;
Icon.Standard = StandardIcon;
Icon.Duotone = DuotoneIcon;
