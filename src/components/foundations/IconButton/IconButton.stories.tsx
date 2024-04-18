import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Chapter, Foundation, mkStoryTitle } from 'utils/storybook';
import { useInverted } from 'utils/hooks';
import { iconControl } from 'utils/library';

import { IconButton } from './IconButton';

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, Foundation.NAVIGATION, 'IconButton'),
  component: IconButton,
  args: {
    ...IconButton.defaultProps,
    icon: 'envelope',
    label: 'Email',
  },
  argTypes: {
    icon: iconControl,
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => {
  const inverted = useInverted();
  return <IconButton {...args} inverted={inverted} />;
};

export const Default = Template.bind({});

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
