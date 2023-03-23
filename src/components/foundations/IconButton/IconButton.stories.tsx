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

export const Email = Template.bind({});

export const LinkedIn = Template.bind({});
LinkedIn.args = {
  icon: 'linkedin-in',
  prefix: 'fab',
};

export const Github = Template.bind({});
Github.args = {
  icon: 'github',
  prefix: 'fab',
};

export const Resume = Template.bind({});
Resume.args = {
  icon: 'file-user',
};
