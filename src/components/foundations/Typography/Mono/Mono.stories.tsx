import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Chapter, Token, mkStoryTitle } from 'utils/storybook';
import { useInverted } from 'utils/hooks';

import { Mono } from './Mono';

export default {
  title: mkStoryTitle(Chapter.TOKEN, Token.TYPOGRAPHY, 'Mono'),
  component: Mono,
  args: {
    children: 'The inner machinations of my mind are an enigma.',
  },
} as ComponentMeta<typeof Mono>;

const Template: ComponentStory<typeof Mono> = args => {
  const inverted = useInverted();
  return <Mono {...args} inverted={inverted} />;
};

export const Default = Template.bind({});

export const Weight = Template.bind({});
Weight.args = {
  weight: 'semiBold',
};
