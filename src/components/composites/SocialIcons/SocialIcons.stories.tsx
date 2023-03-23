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

export default {
  title: mkStoryTitle(Chapter.COMPOSITE, Composite.ICON, 'SocialIcons'),
  component: mkStoryComponent<SocialIconsProps_t>(SocialIcons),
  args: {
    ...SocialIcons.defaultProps,
  },
} as ComponentMeta<typeof SocialIcons>;

const Template: ComponentStory<typeof SocialIcons> = args => (
  <SocialIcons {...args} />
);

export const Default = Template.bind({});

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'vertical',
};

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};
Inverted.parameters = {
  backgrounds: { default: 'navy900' },
};
