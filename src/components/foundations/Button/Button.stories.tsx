import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex } from 'components/foundations/Flex';
import {
  Chapter,
  Foundation,
  mkStoryTitle,
  disableControl,
  mkEnumOptions,
  booleanControl,
} from 'utils/storybook';
import { useInverted } from 'utils/hooks';

import { Button } from './Button';

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, Foundation.NAVIGATION, 'Button'),
  component: Button,
  args: {
    children: 'Click Me',
    variant: 'primary',
  },
  argTypes: {
    isCompact: booleanControl,
    isDisabled: booleanControl,
    isFullWidth: booleanControl,
    isInverted: booleanControl,
    segment: disableControl,
    variant: mkEnumOptions(['primary', 'secondary']),
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => {
  const inverted = useInverted();
  return <Button {...args} inverted={inverted} />;
};

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Primary = Template.bind({});
Primary.storyName = 'Primary (default)';
Primary.args = {
  variant: 'primary',
};

export const PrimaryInverted = Template.bind({});
PrimaryInverted.args = {
  variant: 'primary',
  inverted: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const SecondaryInverted = Template.bind({});
SecondaryInverted.args = {
  variant: 'secondary',
  inverted: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};
FullWidth.decorators = [
  Story => (
    <Flex center css={{ size: '400px', border: '5px solid $neutral300' }}>
      <Story />
    </Flex>
  ),
];

export const Compact = Template.bind({});
Compact.args = {
  compact: true,
  children: 'OK',
};
