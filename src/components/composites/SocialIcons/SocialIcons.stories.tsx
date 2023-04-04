import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  Chapter,
  Composite,
  mkStoryComponent,
  mkStoryTitle,
} from 'utils/storybook';
import {
  SocialIcons,
  SocialIconsProps_t,
} from 'components/composites/SocialIcons/SocialIcons';
import { useInverted } from 'utils/hooks';

export default {
  title: mkStoryTitle(Chapter.COMPOSITE, Composite.ICON, 'SocialIcons'),
  component: mkStoryComponent<SocialIconsProps_t>(SocialIcons),
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
