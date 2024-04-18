import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Chapter, Token, mkStoryTitle, booleanControl } from 'utils/storybook';
import { useInverted } from '@sb/utils/hooks';

import { Header } from './Header';

export default {
  title: mkStoryTitle(Chapter.TOKEN, Token.TYPOGRAPHY, 'Header'),
  component: Header,
  args: {
    children: 'The inner machinations of my mind are an enigma.',
  },
  argTypes: {
    isSubheader: booleanControl,
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => {
  const inverted = useInverted();
  return <Header {...args} isInverted={inverted} />;
};

export const Default = Template.bind({});

export const Subheader = Template.bind({});
Subheader.args = {
  isSubheader: true,
};
