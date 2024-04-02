import type {
  CSS,
  CSSProperties,
  PropertyValue,
  ScaleValue,
} from '@stitches/react';

import { styled, StitchesConfig_t } from 'stitches.config';

export type {
  ComponentProps as ComponentProps_t,
  VariantProps as VariantProps_t,
  CSSProperties as CSSProperties_t,
} from '@stitches/react';

export type CSSObject_t = CSS<StitchesConfig_t>;

export type PropertyValue_t<Property extends keyof CSSProperties> =
  PropertyValue<Property, StitchesConfig_t>;

export type ScaleValue_t<Scale extends keyof StitchesConfig_t['theme']> =
  ScaleValue<Scale, StitchesConfig_t>;

export type StyledConfig_t = Parameters<typeof styled.withConfig>[0];
