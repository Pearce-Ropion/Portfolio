import { theme } from 'stitches.config';
import { ColorPresetOption_t } from 'utils/storybook/controls/base';

type Colors_t = typeof theme['colors'];
type Color_t = Colors_t[keyof Colors_t];

const getThemeColor = (colors: string[]) => {
  return ({ token }: Color_t) => {
    return colors.some(
      color => token.startsWith(color) && token.endsWith('800'),
    );
  };
};

const mkThemedColorPreset = ({
  token,
  value,
}: Color_t): ColorPresetOption_t => ({
  title: token,
  color: value,
});

const themedDefaultColors = [
  'neutral',
  'navy',
  'orange',
  'yellow',
  'green',
  'red',
];
const themedFormColors = ['navy', 'green', 'yellow', 'red'];

export const themedDefaultColorOptions = Object.values(theme.colors)
  .filter(getThemeColor(themedDefaultColors))
  .map(mkThemedColorPreset);

export const themedFormColorOptions = Object.values(theme.colors)
  .filter(getThemeColor(themedFormColors))
  .map(mkThemedColorPreset);
