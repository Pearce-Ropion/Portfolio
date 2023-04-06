import type { CSSProperties, PropertyValue } from '@stitches/react';

import type { BaseStitchesConfig_t } from 'stitches.config';

type PropertyValue_t<Property extends keyof CSSProperties> = PropertyValue<
  Property,
  BaseStitchesConfig_t
>;

const borderShorthandConfig = {
  borderX: (
    value: PropertyValue_t<'borderLeft'> | PropertyValue_t<'borderRight'>,
  ) => ({
    borderLeft: value,
    borderRight: value,
  }),
  borderY: (
    value: PropertyValue_t<'borderTop'> | PropertyValue_t<'borderBottom'>,
  ) => ({
    borderTop: value,
    borderBottom: value,
  }),
  borderXColor: (
    value:
      | PropertyValue_t<'borderLeftColor'>
      | PropertyValue_t<'borderRightColor'>,
  ) => ({
    borderLeftColor: value,
    borderRightColor: value,
  }),
  borderYColor: (
    value:
      | PropertyValue_t<'borderTopColor'>
      | PropertyValue_t<'borderBottomColor'>,
  ) => ({
    borderTopColor: value,
    borderBottomColor: value,
  }),
  borderXStyle: (
    value:
      | PropertyValue_t<'borderLeftStyle'>
      | PropertyValue_t<'borderRightStyle'>,
  ) => ({
    borderLeftStyle: value,
    borderRightStyle: value,
  }),
  borderYStyle: (
    value:
      | PropertyValue_t<'borderTopStyle'>
      | PropertyValue_t<'borderBottomStyle'>,
  ) => ({
    borderTopStyle: value,
    borderBottomStyle: value,
  }),
  borderXWidth: (
    value:
      | PropertyValue_t<'borderLeftWidth'>
      | PropertyValue_t<'borderRightWidth'>,
  ) => ({
    borderLeftWidth: value,
    borderRightWidth: value,
  }),
  borderYWidth: (
    value:
      | PropertyValue_t<'borderTopWidth'>
      | PropertyValue_t<'borderBottomWidth'>,
  ) => ({
    borderTopWidth: value,
    borderBottomWidth: value,
  }),
};

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
  ...borderShorthandConfig,
  size: (value: PropertyValue_t<'width'>) => ({
    width: value,
    height: value,
  }),
};
