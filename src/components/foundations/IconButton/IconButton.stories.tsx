import { ComponentMeta, ComponentStory } from '@storybook/react';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  Chapter,
  Foundation,
  mkEnumOptions,
  mkStoryComponent,
  mkStoryTitle,
} from 'utils/storybook';
import {
  IconButton,
  IconButtonProps_t,
} from 'components/foundations/IconButton/IconButton';

const icons = Object.keys(library.definitions.fas).sort();

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, Foundation.NAVIGATION, 'IconButton'),
  component: mkStoryComponent<IconButtonProps_t>(IconButton),
  args: {
    ...IconButton.defaultProps,
    icon: 'envelope',
    label: 'Email',
  },
  argTypes: {
    icon: mkEnumOptions(icons),
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => (
  <IconButton {...args} />
);

export const Default = Template.bind({});

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};
Inverted.parameters = {
  backgrounds: { default: 'navy900' },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};