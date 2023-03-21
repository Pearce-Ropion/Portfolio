import type {
  CSS,
  CSSProperties,
  PropertyValue,
  ScaleValue,
} from '@stitches/react';

import { styled, StitchesConfig_t } from 'stitches.config';
import type { Maybe_t } from 'types/helpers';

export type {
  ComponentProps as ComponentProps_t,
  VariantProps as VariantProps_t,
  CSSProperties as CSSProperties_t,
} from '@stitches/react';

export type FalsyCSSObject_t = Maybe_t<false | '' | 0>;
export type CSSObject_t = CSS<StitchesConfig_t>;

export interface CSS_t {
  css?: CSSObject_t | FalsyCSSObject_t;
}

export type PropsWithCSS_t<P> = P & CSS_t;

export type PropertyValue_t<Property extends keyof CSSProperties> =
  PropertyValue<Property, StitchesConfig_t>;

export type ScaleValue_t<Scale extends keyof StitchesConfig_t['theme']> =
  ScaleValue<Scale, StitchesConfig_t>;

export type StyledConfig_t = Parameters<typeof styled.withConfig>[0];
