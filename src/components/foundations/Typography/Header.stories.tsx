import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from 'components/foundations/Typography/Typography';
import {
  Header,
  HeaderProps_t,
  HeaderVariants_t,
} from 'components/foundations/Typography/Header';
import { Chapter, Token } from 'utils/storybook/chapters';
import { mkStoryTitle, mkStoryComponent } from 'utils/storybook';

export default {
  title: mkStoryTitle(Chapter.TOKEN, Token.TYPOGRAPHY, 'Header'),
  component: mkStoryComponent<HeaderVariants_t, HeaderProps_t>(Header),
  subcomponents: {
    Typography,
  },
  args: {
    ...Header.defaultProps,
    children: 'The inner machinations of my mind are an enigma.',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Default = Template.bind({});

export const Subheader = Template.bind({});
Subheader.args = {
  subheader: true,
};
