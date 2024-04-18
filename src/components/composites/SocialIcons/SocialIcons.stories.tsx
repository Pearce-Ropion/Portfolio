import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Chapter, Composite, mkStoryTitle } from 'utils/storybook';
import { useInverted } from 'utils/hooks';

import { SocialIcons } from './SocialIcons';

export default {
  title: mkStoryTitle(Chapter.COMPOSITE, Composite.ICON, 'SocialIcons'),
  component: SocialIcons,
  args: {
    ...SocialIcons.defaultProps,
  },
} as ComponentMeta<typeof SocialIcons>;

const Template: ComponentStory<typeof SocialIcons> = args => {
  const inverted = useInverted();
  return <SocialIcons {...args} inverted={inverted} />;
};

export const Default = Template.bind({});

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'vertical',
};

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};
