import { FC } from 'react';

import { Box, Copy, Flex } from 'components/foundations';
import { Chapter, mkStoryTitle } from 'utils/storybook';

export default {};

export const Level: FC = () => (
  <Flex direction="row">
    <Box>
      <Flex
        align="center"
        justify="center"
        css={{ boxShadow: '$low', size: '200px' }}
      >
        <Copy weight="medium">High</Copy>
      </Flex>
    </Box>
    <Box>
      <Flex
        align="center"
        justify="center"
        css={{ boxShadow: '$high', size: '200px' }}
      >
        <Copy weight="medium">Low</Copy>
      </Flex>
    </Box>
  </Flex>
);
