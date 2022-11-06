import { Palette } from 'styles/tokens/color';

export interface Background_t {
  name: string;
  value: Palette;
}

export const invertedBackgrounds = [
  'neutral900',
  'neutral800',
  'neutral700',
  'navy900',
  'navy800',
  'green900',
  'green800',
  'yellow900',
  'red900',
  'red800',
];

export const backgrounds: Background_t[] = [
  { name: 'neutral0', value: Palette.neutral0 },
  { name: 'neutral100', value: Palette.neutral100 },
  { name: 'neutral200', value: Palette.neutral200 },
  { name: 'neutral300', value: Palette.neutral300 },
  { name: 'neutral500', value: Palette.neutral500 },
  { name: 'neutral700', value: Palette.neutral700 },
  { name: 'neutral800', value: Palette.neutral800 },
  { name: 'neutral900', value: Palette.neutral900 },

  { name: 'navy900', value: Palette.navy900 },
  { name: 'navy800', value: Palette.navy800 },
  { name: 'navy500', value: Palette.navy500 },
  { name: 'navy200', value: Palette.navy200 },
  { name: 'navy100', value: Palette.navy100 },
];
