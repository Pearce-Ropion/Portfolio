import {
  IconDefinition,
  IconLookup,
  IconProp,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export type IconPrefix_t = Exclude<IconPrefix, 'fak' | 'fass'>;

export const DEFAULT_ICON_PREFIX = 'fas' as const;

export const iconToIconLookup = (
  icon: IconProp | IconDefinition,
  prefix?: IconPrefix_t | null,
  shouldThrow = true,
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

  if (shouldThrow && !iconLookup.iconName) {
    throw new Error('Icon: Invalid `icon` passed to `iconToIconLookup`');
  }

  return iconLookup;
};
