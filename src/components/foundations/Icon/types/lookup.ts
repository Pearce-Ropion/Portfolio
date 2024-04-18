import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

export type IconVariant_t = Exclude<IconPrefix, 'fak' | 'fass'>;

export type IconName_t = IconName;
export interface IconDefinition_t {
  icon: IconName_t;
  variant?: IconVariant_t;
}

export type IconProp_t = IconName_t | IconDefinition_t;
export interface IconLookupProps_t extends IconDefinition_t {}
