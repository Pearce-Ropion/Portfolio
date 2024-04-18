import { cloneElement, isValidElement, ReactElement } from 'react';

import { mergeProps } from 'utils/merge';

import { Icon } from './Icon';
import {
  IconFactoryIconProp_t,
  IconFactoryIconProps_t,
  IconProps_t,
} from './types';
import { DEFAULT_ICON_PREFIX, lookupIcon } from './lookup';

export const iconFactory = (
  icon: IconFactoryIconProp_t,
  propOverrides: IconFactoryIconProps_t = {},
  defaultProps: IconFactoryIconProps_t = {},
): ReactElement<IconProps_t> => {
  if (isValidElement<IconProps_t>(icon)) {
    return cloneElement<IconProps_t>(
      icon,
      mergeProps(defaultProps, icon.props, propOverrides, {
        isDuotone:
          icon.props.isDuotone ||
          Boolean(
            icon.props.primaryColor ||
              icon.props.primaryOpacity ||
              icon.props.secondaryColor ||
              icon.props.secondaryOpacity,
          ),
      }),
    );
  }

  const iconLookup = lookupIcon(icon);
  const props = mergeProps(defaultProps, propOverrides);

  return (
    <Icon
      {...props}
      icon={{
        icon: iconLookup.iconName,
        variant: iconLookup.prefix ?? DEFAULT_ICON_PREFIX,
      }}
      isDuotone={iconLookup.prefix === 'fad' || props.isDuotone}
    />
  );
};
