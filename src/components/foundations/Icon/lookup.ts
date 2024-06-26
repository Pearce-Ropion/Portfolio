import { IconLookup } from '@fortawesome/fontawesome-svg-core';

import { IconProp_t, IconVariant_t } from './types/lookup';

export const DEFAULT_ICON_PREFIX = 'fas' as const;

interface LookupIconResult_t extends IconLookup {
  prefix: IconVariant_t;
}

export const lookupIcon = (
  icon: IconProp_t,
  variant?: IconVariant_t | null,
): LookupIconResult_t => {
  const iconLookup = {
    prefix: variant ?? DEFAULT_ICON_PREFIX,
  } as LookupIconResult_t;
  if (typeof icon === 'string') {
    iconLookup.iconName = icon;
  } else if ('icon' in icon) {
    iconLookup.iconName = icon.icon;

    if ('variant' in icon && icon.variant) {
      iconLookup.prefix = icon.variant;
    }
  }

  if (!iconLookup.iconName) {
    throw new Error('Icon: Invalid `icon` passed to `lookupIcon`');
  }

  return iconLookup;
};
