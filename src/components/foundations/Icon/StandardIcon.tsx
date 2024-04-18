import { useMemo } from 'react';

import { createComponentWithRef } from 'utils/component';
import { useMergeStyle } from 'utils/hooks';
import { tokenToVariable } from 'utils/style/tokens';

import { StyledIcon } from './styles';
import { StandardIconElement_t, StandardIconProps_t } from './types';
import { useFontAwesomeProps } from './useFontAwesomeProps';
import { lookupIcon } from './lookup';

export const StandardIcon = createComponentWithRef<
  StandardIconElement_t,
  StandardIconProps_t
>(({ color, icon, opacity, style: styleProp, ...rest }, forwardedRef) => {
  const iconLookup = useMemo(() => {
    return lookupIcon(icon);
  }, [icon]);

  const style = useMergeStyle(
    styleProp,
    color && {
      '--fa-main-color': tokenToVariable(color),
    },
    opacity && {
      '--fa-main-opacity': opacity,
    },
    [color, opacity, styleProp],
  );

  const fontAwesomeIconProps = useFontAwesomeProps(iconLookup, rest);

  return (
    <StyledIcon
      ref={forwardedRef}
      {...rest}
      {...fontAwesomeIconProps}
      icon={iconLookup}
      style={style}
    />
  );
});
