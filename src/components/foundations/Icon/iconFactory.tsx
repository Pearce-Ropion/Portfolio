import {
  IconDefinition,
  IconLookup,
  IconProp,
} from '@fortawesome/fontawesome-svg-core';
import { cloneElement, isValidElement, ReactElement } from 'react';

import { Icon, IconProps_t } from 'components/foundations/Icon/Icon';
import { cx } from 'utils/style/classes';
import { mergeCSS, mergeStyle } from 'utils/style/css';

export const DEFAULT_ICON_PREFIX = 'fas' as const;

export type IconFactoryIconProp_t =
  | IconProp
  | IconDefinition
  | ReactElement<IconProps_t>;

export const iconFactory = (
  icon: IconFactoryIconProp_t,
  propDefaults: Partial<IconProps_t> = {},
): ReactElement<IconProps_t> => {
  if (isValidElement<IconProps_t>(icon)) {
    return cloneElement<IconProps_t>(icon, {
      ...propDefaults,
      ...icon.props,
      className: cx(propDefaults.className, icon.props.className),
      css: mergeCSS(propDefaults.css, icon.props.css),
      style: mergeStyle(propDefaults.style, icon.props.style),
      duotone:
        icon.props.duotone ||
        Boolean(
          icon.props.primaryColor ||
            icon.props.primaryOpacity ||
            icon.props.secondaryColor ||
            icon.props.secondaryOpacity,
        ),
    });
  }

  const iconLookup: IconLookup = { prefix: DEFAULT_ICON_PREFIX } as IconLookup;
  if (typeof icon === 'string') {
    iconLookup.iconName = icon;
  } else if (Array.isArray(icon) && icon.length === 2) {
    iconLookup.prefix = icon[0];
    iconLookup.iconName = icon[1];
  } else if ('prefix' in icon && 'iconName' in icon) {
    iconLookup.prefix = icon.prefix;
    iconLookup.iconName = icon.iconName;
  }

  if (!iconLookup.iconName) {
    throw new Error('Icon: Invalid `iconName` passed to iconFactory');
  }

  return (
    <Icon
      icon={iconLookup}
      duotone={iconLookup.prefix === 'fad'}
      {...propDefaults}
    />
  );
};
