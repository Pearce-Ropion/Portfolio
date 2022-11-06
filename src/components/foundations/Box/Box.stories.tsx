import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box, BoxProps_t, BoxVariants_t } from 'components/foundations/Box/Box';
import { Chapter, Foundation } from 'utils/storybook/chapters';
import { mkStoryTitle, mkStoryComponent } from 'utils/storybook';
import { border } from 'utils/style/format';
import { styled } from 'stitches.config';

const InnerBox = styled(Box, {
  size: '100px',
  borderRadius: '$medium',
});

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, Foundation.LAYOUT, 'Box'),
  component: mkStoryComponent<BoxVariants_t, BoxProps_t>(Box),
  args: {
    ...Box.defaultProps,
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = args => (
  <Box
    {...args}
    css={{
      border: border(3, '$neutral800'),
      borderRadius: '$large',
      size: '400px',
    }}
  >
    <InnerBox css={{ backgroundColor: '$green800' }} />
    <InnerBox css={{ backgroundColor: '$yellow800' }} />
    <InnerBox css={{ backgroundColor: '$red800' }} />
  </Box>
);

export const Default = Template.bind({});
