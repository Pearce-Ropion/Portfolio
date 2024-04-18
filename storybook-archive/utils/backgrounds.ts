import { colord } from 'colord';

import { StoryParameters_t } from 'components/contexts';
import { Palette } from 'styles/tokens/color';
import { ValueOf_t } from 'types/helpers';

export interface Background_t {
  name: keyof typeof Palette;
  value: ValueOf_t<typeof Palette>;
}

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

  { name: 'orange900', value: Palette.orange900 },
  { name: 'orange800', value: Palette.orange800 },

  { name: 'yellow900', value: Palette.yellow900 },
  { name: 'yellow800', value: Palette.yellow800 },

  { name: 'red900', value: Palette.red900 },
  { name: 'red800', value: Palette.red800 },

  { name: 'green900', value: Palette.green900 },
  { name: 'green800', value: Palette.green800 },
];

export const backgroundsParameter: StoryParameters_t['backgrounds'] = {
  default: 'neutral0',
  values: backgrounds,
};

export const invertedBackgrounds = Object.values(Palette).filter(color => {
  return colord(color).isReadable();
});
