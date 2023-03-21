import { createStitches, DefaultThemeMap } from '@stitches/react';
import type Stitches from '@stitches/react/types/stitches';

import { MediaQuery as mediaConfig } from 'utils/style/media-query';
import { shorthandConfig } from 'utils/style/shorthands';
import {
  BorderRadius,
  Palette,
  FontFamily,
  FontWeight,
  FontSize,
  LineHeight,
  LetterSpacing,
  Scale,
  Elevation,
  ZIndex,
  Transition,
} from 'styles/tokens';

export const themeConfig = {
  colors: Palette,
  fonts: FontFamily,
  fontWeights: FontWeight,
  fontSizes: FontSize,
  lineHeights: LineHeight,
  letterSpacings: LetterSpacing,
  radii: BorderRadius,
  shadows: Elevation,
  sizes: Scale,
  space: Scale,
  transitions: Transition,
  zIndices: ZIndex,
};

// Should only be used for type inference for shorthands
export type BaseStitches_t = Stitches<
  '',
  typeof mediaConfig,
  typeof themeConfig,
  DefaultThemeMap,
  {}
>;
export type BaseStitchesConfig_t = BaseStitches_t['config'];

export const {
  config,
  theme,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  reset,
  styled,
} = createStitches({
  media: mediaConfig,
  theme: themeConfig,
  utils: shorthandConfig,
});

export type StitchesConfig_t = typeof config;
