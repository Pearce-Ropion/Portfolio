import { Box, Copy, Flex } from 'components';
import { FC } from 'react';
import { Elevation } from 'styles/tokens/elevation';
import { mkStoryTitle } from 'utils/storybook';
import { Chapter } from 'utils/storybook/chapters';
import { toPx } from 'utils/style/units';

export default {
  title: mkStoryTitle(Chapter.TOKEN, 'Elevation'),
};

export const Levels: FC = () => (
  <Flex direction="row">
    {Object.entries(Elevation).map(([level, shadow], idx, arr) => (
      <Box
        key={level}
        css={{ marginRight: idx === arr.length - 1 ? '$0' : '$7' }}
      >
        <Flex
          align="center"
          justify="center"
          css={{ boxShadow: shadow, size: toPx(200) }}
        >
          <Copy weight="medium">{level}</Copy>
        </Flex>
      </Box>
    ))}
  </Flex>
);
