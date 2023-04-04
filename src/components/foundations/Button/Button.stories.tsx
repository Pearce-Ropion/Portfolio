import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonProps_t } from 'components/foundations/Button/Button';
import { Chapter, Foundation } from 'utils/storybook/chapters';
import {
  mkStoryTitle,
  mkStoryComponent,
  disableControl,
} from 'utils/storybook';
import { Flex } from 'components/foundations/Flex';

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, Foundation.NAVIGATION, 'Button'),
  component: mkStoryComponent<ButtonProps_t>(Button),
  args: {
    ...Button.defaultProps,
    children: 'Click Me',
  },
  argTypes: {
    segment: disableControl,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

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
