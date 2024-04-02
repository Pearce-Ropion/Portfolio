import { ComponentMeta, ComponentStory } from '@storybook/react';

import { useInverted } from 'utils/hooks';
import { Chapter, Token, mkStoryTitle } from 'utils/storybook';

import { Copy } from './Copy';

export default {
  title: mkStoryTitle(Chapter.TOKEN, Token.TYPOGRAPHY, 'Copy'),
  component: Copy,
  args: {
    children: 'The inner machinations of my mind are an enigma.',
    size: 'medium',
    weight: 'normal',
  },
} as ComponentMeta<typeof Copy>;

const Template: ComponentStory<typeof Copy> = args => {
  const inverted = useInverted();
  return <Copy {...args} inverted={inverted} />;
};

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Weight = Template.bind({});
Weight.args = {
  weight: 'bold',
};
