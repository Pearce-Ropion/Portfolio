import { FC } from 'react';

import { Box, Copy, Flex } from 'components';
import { Elevation } from 'styles/tokens/elevation';
import { Chapter, mkStoryTitle } from 'utils/storybook';

export default {
  title: mkStoryTitle(Chapter.TOKEN, 'Elevation'),
};

export const Level: FC = () => (
  <Flex direction="row">
    {Object.entries(Elevation).map(([level, shadow], idx, arr) => (
      <Box
        key={level}
        css={{ marginRight: idx === arr.length - 1 ? '$0' : '$7' }}
      >
        <Flex
          align="center"
          justify="center"
          css={{ boxShadow: shadow, size: '200px' }}
        >
          <Copy weight="medium">{level}</Copy>
        </Flex>
      </Box>
    ))}
  </Flex>
);
