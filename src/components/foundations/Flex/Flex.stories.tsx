import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box } from 'components/foundations/Box';
import { styled } from 'stitches.config';
import {
  Chapter,
  Foundation,
  mkStoryTitle,
  booleanControl,
  mkEnumOptions,
} from 'utils/storybook';

import { Flex } from './Flex';

const InnerBox = styled(Box, {
  size: '100px',
  borderRadius: '$medium',
});

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, Foundation.LAYOUT, 'Flex'),
  component: Flex,
  argTypes: {
    center: booleanControl,
    direction: mkEnumOptions(['column', 'columnReverse', 'row', 'rowReverse']),
    align: mkEnumOptions(['center', 'end', 'start']),
    gap: mkEnumOptions([1, 2, 3, 4, 5, 6, 7]),
    grow: booleanControl,
    justify: mkEnumOptions([
      'start',
      'center',
      'end',
      'between',
      'around',
      'evenly',
    ]),
    wrap: mkEnumOptions(['noWrap', 'wrap']),
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = args => (
  <Flex
    {...args}
    css={{
      border: '3px solid $neutral800',
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

export const Align = Template.bind({});
Align.args = {
  align: 'end',
};

export const Center = Template.bind({});
Center.args = {
  center: true,
};

export const Direction = Template.bind({});
Direction.args = {
  direction: 'column',
};

export const Gap = Template.bind({});
Gap.args = {
  gap: 3,
};

export const Grow = Template.bind({});
Grow.args = {
  grow: true,
};

export const Justify = Template.bind({});
Justify.args = {
  justify: 'evenly',
};

export const Wrap = Template.bind({});
Wrap.args = {
  wrap: 'wrap',
};
