import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box } from 'components/foundations/Box';
import {
  Chapter,
  Foundation,
  mkStoryTitle,
  mkStoryComponent,
} from 'utils/storybook';
import { styled } from 'stitches.config';

const InnerBox = styled(Box, {
  size: '100px',
  borderRadius: '$medium',
});

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, Foundation.LAYOUT, 'Box'),
  component: mkStoryComponent(Box),
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
    <InnerBox css={{ backgroundColor: '$green800' }} />
    <InnerBox css={{ backgroundColor: '$yellow800' }} />
    <InnerBox css={{ backgroundColor: '$red800' }} />
  </Box>
);

export const Default = Template.bind({});

export const Grow = Template.bind({});
Grow.args = {
  grow: true,
};
