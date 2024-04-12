import {
  IconDefinition,
  IconProp,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core';

export type IconPrefix_t = Exclude<IconPrefix, 'fak' | 'fass'>;
export type IconProp_t = IconProp | IconDefinition;

export interface IconLookupProps_t {
  icon: IconProp_t;
}
