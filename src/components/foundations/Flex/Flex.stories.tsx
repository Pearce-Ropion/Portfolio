import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box } from 'components/foundations/Box';
import {
  Flex,
  FlexProps_t,
  FlexVariants_t,
} from 'components/foundations/Flex/Flex';
import { Chapter, Foundation } from 'utils/storybook/chapters';
import { mkStoryTitle, mkStoryComponent } from 'utils/storybook';
import { border } from 'utils/style/format';
import { styled } from 'stitches.config';

const InnerBox = styled(Box, {
  size: '100px',
  borderRadius: '$medium',
});

export default {
  title: mkStoryTitle(Chapter.TOKEN, Foundation.LAYOUT, 'Flex'),
  component: mkStoryComponent<FlexVariants_t, FlexProps_t>(Flex),
  args: {
    ...Flex.defaultProps,
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = args => (
  <Flex
    {...args}
    css={{
      border: border(3, '$neutral800'),
      borderRadius: '$large',
      size: args.wrap ? '250px' : '400px',
    }}
  >
    <InnerBox css={{ backgroundColor: '$green800' }} />
    <InnerBox css={{ backgroundColor: '$yellow800' }} />
    <InnerBox css={{ backgroundColor: '$red800' }} />
  </Flex>
);

export const Default = Template.bind({});

export const Direction = Template.bind({});
Direction.args = {
  direction: 'row',
};

export const Align = Template.bind({});
Align.args = {
  align: 'center',
};

export const Justify = Template.bind({});
Justify.args = {
  justify: 'center',
};

export const Wrap = Template.bind({});
Wrap.args = {
  wrap: 'wrap',
};
