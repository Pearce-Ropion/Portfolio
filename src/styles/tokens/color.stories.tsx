import { FC } from 'react';

import { Box, Flex, Copy, Mono } from 'components';
import { Palette } from 'styles/tokens/color';
import { mkStoryTitle } from 'utils/storybook';
import { Chapter } from 'utils/storybook/chapters';
import { Br } from 'components/foundations/Html';
import { toPx } from 'utils/style/units';
import { hexToRgb } from 'utils/style/colors';

interface ColorEntry_t {
  token: string;
  color: Palette;
}

interface ColorFamily_t {
  family: string;
  colors: ColorEntry_t[];
}

const colorOrder = ['neutral', 'navy', 'orange', 'yellow', 'red', 'green'];
const colorFamilies = Object.entries(Palette).reduce<ColorFamily_t[]>(
  (acc, [token, color]) => {
    const family = token.replace(/\d/g, '');
    const colorIdx = colorOrder.indexOf(family);

    if (!acc[colorIdx]) {
      acc[colorIdx] = {
        family,
        colors: [],
      };
    }

    acc[colorIdx].colors.push({
      token,
      color,
    });

    return acc;
  },
  [],
);

// import { FontFamily } from 'styles/tokens/font';

type ColorBlockProps_t = ColorEntry_t;

const ColorBlock: FC<ColorBlockProps_t> = ({ token, color }) => (
  <Box css={{ marginBottom: toPx(16) }}>
    <Box
      css={{
        backgroundColor: color,
        width: '200px',
        height: '100px',
        borderRadius: '$medium',
      }}
    />
    <Box css={{ marginTop: toPx(4) }}>
      <Copy weight="bold">{token}</Copy>
      <Mono>
        {color}
        <Br />
        {hexToRgb(color)}
      </Mono>
    </Box>
  </Box>
);

export default {
  title: mkStoryTitle(Chapter.TOKENS, 'Color'),
};

export const Colors: FC = () => {
  return (
    <Box>
      {colorFamilies.map(({ family, colors }) => (
        <Flex key={family} css={{ marginBottom: toPx(16) }}>
          {colors.map(({ token, color }, idx) => (
            <Box
              key={token}
              css={{
                marginRight: toPx(idx === colors.length - 1 ? 0 : 16),
              }}
            >
              <ColorBlock token={token} color={color} />
            </Box>
          ))}
        </Flex>
      ))}
    </Box>
  );
};
