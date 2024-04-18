import { FC } from 'react';
import { colord } from 'colord';

import { Box, Flex, Copy, Mono } from 'components/foundations';
import { Palette } from 'styles/tokens/color';
import { mkStoryTitle } from 'utils/storybook';
import { Chapter } from 'utils/storybook/chapters';
import { HTML } from 'components/Html';
import { toPx } from 'utils/style/units';

interface ColorEntry_t {
  token: string;
  color: string;
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
        <HTML.Br />
        {colord(color).toRgbString()}
      </Mono>
    </Box>
  </Box>
);

export default {};

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
