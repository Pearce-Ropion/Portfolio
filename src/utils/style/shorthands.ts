import type { CSSProperties, PropertyValue } from '@stitches/react';

import type { BaseStitchesConfig_t } from 'stitches.config';

type PropertyValue_t<Property extends keyof CSSProperties> = PropertyValue<
  Property,
  BaseStitchesConfig_t
>;

export const shorthandConfig = {
  align: (value: PropertyValue_t<'alignItems'>) => ({ alignItems: value }),
  justify: (value: PropertyValue_t<'justifyContent'>) => ({
    justifyContent: value,
  }),
  linearGradient: (value: string) => ({
    backgroundColor: `linear-gradient(${value})`,
  }),
  marginX: (
    value: PropertyValue_t<'marginLeft'> | PropertyValue_t<'marginRight'>,
  ) => ({
    marginLeft: value,
    marginRight: value,
  }),
  marginY: (
    value: PropertyValue_t<'marginTop'> | PropertyValue_t<'marginBottom'>,
  ) => ({
    marginTop: value,
    marginBottom: value,
  }),
  paddingX: (
    value: PropertyValue_t<'paddingLeft'> | PropertyValue_t<'paddingRight'>,
  ) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  paddingY: (
    value: PropertyValue_t<'paddingTop'> | PropertyValue_t<'paddingBottom'>,
  ) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  size: (value: PropertyValue_t<'width'>) => ({
    width: value,
    height: value,
  }),
};
