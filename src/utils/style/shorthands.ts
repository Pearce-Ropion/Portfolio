import type { CSSProperties, PropertyValue } from '@stitches/react';

import type { BaseStitchesConfig_t } from 'stitches.config';

type PropertyValue_t<Property extends keyof CSSProperties> = PropertyValue<
  Property,
  BaseStitchesConfig_t
>;

export const marginShorthands = {
  m: (value: PropertyValue_t<'margin'>) => ({ margin: value }),
  mt: (value: PropertyValue_t<'marginTop'>) => ({ marginTop: value }),
  mr: (value: PropertyValue_t<'marginRight'>) => ({ marginRight: value }),
  mb: (value: PropertyValue_t<'marginBottom'>) => ({ marginBottom: value }),
  ml: (value: PropertyValue_t<'marginLeft'>) => ({ marginLeft: value }),
  mx: (
    value: PropertyValue_t<'marginLeft'> | PropertyValue_t<'marginRight'>,
  ) => ({
    marginLeft: value,
    marginRight: value,
  }),
  marginX: (
    value: PropertyValue_t<'marginLeft'> | PropertyValue_t<'marginRight'>,
  ) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (
    value: PropertyValue_t<'marginTop'> | PropertyValue_t<'marginBottom'>,
  ) => ({
    marginTop: value,
    marginBottom: value,
  }),
  marginY: (
    value: PropertyValue_t<'marginTop'> | PropertyValue_t<'marginBottom'>,
  ) => ({
    marginTop: value,
    marginBottom: value,
  }),
};

export const paddingShorthands = {
  p: (value: PropertyValue_t<'padding'>) => ({ padding: value }),
  pt: (value: PropertyValue_t<'paddingTop'>) => ({ paddingTop: value }),
  pr: (value: PropertyValue_t<'paddingRight'>) => ({ paddingRight: value }),
  pb: (value: PropertyValue_t<'paddingBottom'>) => ({ paddingBottom: value }),
  pl: (value: PropertyValue_t<'paddingLeft'>) => ({ paddingLeft: value }),
  px: (
    value: PropertyValue_t<'paddingLeft'> | PropertyValue_t<'paddingRight'>,
  ) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  paddingX: (
    value: PropertyValue_t<'paddingLeft'> | PropertyValue_t<'paddingRight'>,
  ) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (
    value: PropertyValue_t<'paddingTop'> | PropertyValue_t<'paddingBottom'>,
  ) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  paddingY: (
    value: PropertyValue_t<'paddingTop'> | PropertyValue_t<'paddingBottom'>,
  ) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
};

export const borderShorthands = {
  b: (value: PropertyValue_t<'border'>) => ({ border: value }),
  bt: (value: PropertyValue_t<'borderTop'>) => ({ borderTop: value }),
  br: (value: PropertyValue_t<'borderRight'>) => ({ borderRight: value }),
  bb: (value: PropertyValue_t<'borderBottom'>) => ({ borderBottom: value }),
  bl: (value: PropertyValue_t<'borderLeft'>) => ({ borderLeft: value }),
  bx: (
    value: PropertyValue_t<'borderLeft'> | PropertyValue_t<'borderRight'>,
  ) => ({
    borderLeft: value,
    borderRight: value,
  }),
  by: (
    value: PropertyValue_t<'borderTop'> | PropertyValue_t<'borderBottom'>,
  ) => ({
    borderTop: value,
    borderBottom: value,
  }),
};

export const colorShorthands = {
  bg: (value: PropertyValue_t<'background'>) => ({ background: value }),
  bc: (value: PropertyValue_t<'backgroundColor'>) => ({
    backgroundColor: value,
  }),
  linearGradient: (value: string) => ({
    backgroundColor: `linear-gradient(${value})`,
  }),
};

export const layoutShorthands = {
  ox: (value: PropertyValue_t<'overflowX'>) => ({ overflowX: value }),
  oy: (value: PropertyValue_t<'overflowY'>) => ({ overflowY: value }),
  size: (value: PropertyValue_t<'width'>) => ({
    width: value,
    height: value,
  }),
};

export const flexShorthands = {
  align: (value: PropertyValue_t<'alignItems'>) => ({ alignItems: value }),
  justify: (value: PropertyValue_t<'justifyContent'>) => ({
    justifyContent: value,
  }),
};
