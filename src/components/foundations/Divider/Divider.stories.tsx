import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex } from 'components/foundations/Flex';
import {
  mkStoryTitle,
  Chapter,
  mkEnumOptions,
  rangeControl,
  booleanControl,
} from 'utils/storybook';

import { Divider } from './Divider';

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, 'Divider'),
  component: Divider,
  args: {
    direction: 'horizontal',
  },
  argTypes: {
    direction: mkEnumOptions(['horizontal', 'vertical']),
    length: rangeControl({ min: 0, max: 1000 }),
    squared: booleanControl,
    thickness: rangeControl({ min: 0, max: 10 }),
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <Flex
        align="center"
        justify="center"
        css={{
          $$margin: '$space$4',

          border: '2px solid $borderPrimary',
          borderRadius: '$large',
          margin: '$$margin',

          // expand to fill story frame
          height: 'calc(100vh - (2 * $$margin))',
          width: 'calc(100vw - (2 * $$margin))',
        }}
      >
        <Story />
      </Flex>
    ),
  ],
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = args => <Divider {...args} />;

export const Horizontal = Template.bind({});

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'vertical',
};

export const CustomLength = Template.bind({});
CustomLength.args = {
  length: 300,
};

export const CustomThickness = Template.bind({});
CustomThickness.args = {
  length: 300,
  thickness: 8,
};

export const Squared = Template.bind({});
Squared.args = {
  length: 300,
  squared: true,
  thickness: 10,
};
