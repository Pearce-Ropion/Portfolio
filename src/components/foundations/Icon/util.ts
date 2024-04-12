import { IconLookup } from '@fortawesome/fontawesome-svg-core';

import { IconPrefix_t, IconProp_t } from './types/lookup';

export const DEFAULT_ICON_PREFIX = 'fas' as const;

export const lookupIcon = (
  icon: IconProp_t,
  prefix?: IconPrefix_t | null,
): IconLookup => {
  const iconLookup: IconLookup = {
    prefix: prefix ?? DEFAULT_ICON_PREFIX,
  } as IconLookup;
  if (typeof icon === 'string') {
    iconLookup.iconName = icon;
  } else if (Array.isArray(icon) && icon.length === 2) {
    iconLookup.prefix = icon[0];
    iconLookup.iconName = icon[1];
  } else if ('iconName' in icon) {
    iconLookup.iconName = icon.iconName;
    if ('prefix' in icon) {
      iconLookup.prefix = icon.prefix;
    }
  }

  if (!iconLookup.iconName) {
    throw new Error('Icon: Invalid `icon` passed to `lookupIcon`');
  }

  return iconLookup;
};
