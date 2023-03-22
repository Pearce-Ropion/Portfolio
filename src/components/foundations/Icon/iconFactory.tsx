import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
import { cloneElement, isValidElement, ReactElement } from 'react';

import { Icon, IconProps_t } from 'components/foundations/Icon/Icon';
import { cx } from 'utils/style/classes';
import { mergeCSS, mergeStyle } from 'utils/style/css';
import {
  IconPrefix_t,
  iconToIconLookup,
} from 'components/foundations/Icon/util';

export type IconFactoryIconProp_t =
  | IconProp
  | IconDefinition
  | ReactElement<IconProps_t>;

export const iconFactory = (
  icon: IconFactoryIconProp_t,
  prefix?: IconPrefix_t | null,
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
        prefix === 'fad' ||
        Boolean(
          icon.props.primaryColor ||
            icon.props.primaryOpacity ||
            icon.props.secondaryColor ||
            icon.props.secondaryOpacity,
        ),
    });
  }

  const iconLookup = iconToIconLookup(icon, prefix, false);

  if (!iconLookup.iconName) {
    throw new Error('Icon: Invalid `iconName` passed to iconFactory');
  }

  return (
    <Icon
      icon={iconLookup}
      duotone={iconLookup.prefix === 'fad' || propDefaults.duotone}
      {...propDefaults}
    />
  );
};
