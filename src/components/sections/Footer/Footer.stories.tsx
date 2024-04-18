import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Chapter, Composite, mkStoryTitle } from 'utils/storybook';
import { useInverted } from 'utils/hooks';

import { Footer } from './Footer';

export default {
  title: mkStoryTitle(Chapter.COMPOSITE, Composite.SECTION, 'Footer'),
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => {
  const inverted = useInverted();
  return <Footer {...args} inverted={inverted} />;
};

export const Default = Template.bind({});

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};
