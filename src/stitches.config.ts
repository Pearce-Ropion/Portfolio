import { createStitches } from '@stitches/react';
import type { ConfigType } from '@stitches/react/types/config';

import { MQ } from 'utils/style/media-query';
import {
  borderShorthands,
  colorShorthands,
  flexShorthands,
  layoutShorthands,
  marginShorthands,
  paddingShorthands,
} from 'utils/style/shorthands';

import { BorderRadius } from 'styles/tokens/layout';
import { Palette } from 'styles/tokens/color';
import {
  FontFamily,
  FontWeight,
  FontSize,
  LineHeight,
  LetterSpacing,
} from 'styles/tokens/font';
import { Scale } from 'styles/tokens/scale';
import { Elevation, ZIndex } from 'styles/tokens/elevation';

interface ThemeConfig_t {
  colors: typeof Palette;
  fonts: typeof FontFamily;
  fontWeights: typeof FontWeight;
  fontSizes: typeof FontSize;
  lineHeights: typeof LineHeight;
  letterSpacings: typeof LetterSpacing;
  sizes: typeof Scale;
  space: typeof Scale;
  radii: typeof BorderRadius;
  shadows: typeof Elevation;
  zIndices: typeof ZIndex;
}

export const themeConfig: ConfigType.Theme<ThemeConfig_t> = {
  colors: Palette,
  fonts: FontFamily,
  fontWeights: FontWeight,
  fontSizes: FontSize,
  lineHeights: LineHeight,
  letterSpacings: LetterSpacing,
  sizes: Scale,
  space: Scale,
  radii: BorderRadius,
  shadows: Elevation,
  zIndices: ZIndex,
};

function stripMediaDecorator(query: string): string {
  return query.slice('@media'.length).trim();
}

export interface MediaConfig_t {
  mobile: string;
  tabletSmall: string;
  onlyTabletSmall: string;
  tablet: string;
  onlyTable: string;
  desktop: string;
  desktopMed: string;
  desktopWide: string;
}

const mediaConfig: ConfigType.Media<MediaConfig_t> = {
  mobile: stripMediaDecorator(MQ.isMobile),
  tabletSmall: stripMediaDecorator(MQ.isTabletSmall),
  onlyTabletSmall: stripMediaDecorator(MQ.isOnlyTabletSmall),
  tablet: stripMediaDecorator(MQ.isTablet),
  onlyTable: stripMediaDecorator(MQ.isOnlyTablet),
  desktop: stripMediaDecorator(MQ.isDesktop),
  desktopMed: stripMediaDecorator(MQ.isDesktopMed),
  desktopWide: stripMediaDecorator(MQ.isDesktopWide),
};

const baseConfig = {
  theme: themeConfig,
  media: mediaConfig,
};

// Should only be used for type inference for shorthands
const baseStitchesConfig = createStitches(baseConfig);
export type BaseStitchesConfig_t = typeof baseStitchesConfig.config;

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
} = createStitches<
  BaseStitchesConfig_t['prefix'],
  BaseStitchesConfig_t['media'],
  BaseStitchesConfig_t['theme']
>({
  ...baseConfig,

  utils: {
    ...borderShorthands,
    ...colorShorthands,
    ...flexShorthands,
    ...layoutShorthands,
    ...marginShorthands,
    ...paddingShorthands,
  },
});

export type StitchesConfig_t = typeof config;
