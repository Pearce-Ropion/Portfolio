import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box } from 'components/foundations/Box';
import { styled } from 'stitches.config';
import {
  Chapter,
  Foundation,
  booleanControl,
  mkStoryTitle,
} from 'utils/storybook';

const InnerBox = styled(Box, {
  size: '100px',
  borderRadius: '$medium',
});

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, Foundation.LAYOUT, 'Box'),
  component: Box,
  argTypes: {
    grow: booleanControl,
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = args => (
  <Box
    {...args}
    css={{
      border: '3px solid $neutral800',
      borderRadius: '$large',
      size: '400px',
    }}
  >
    <InnerBox style={{ backgroundColor: '$green800' }} />
    <InnerBox style={{ backgroundColor: '$yellow800' }} />
    <InnerBox style={{ backgroundColor: '$red800' }} />
  </Box>
);

export const Default = Template.bind({});

export const Grow = Template.bind({});
Grow.args = {
  grow: true,
};
