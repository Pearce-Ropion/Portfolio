import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from 'components/foundations/Typography/Typography';
import {
  Mono,
  MonoProps_t,
  MonoVariants_t,
} from 'components/foundations/Typography/Mono';
import { Chapter, Token } from 'utils/storybook/chapters';
import { mkStoryTitle, mkStoryComponent } from 'utils/storybook';

export default {
  title: mkStoryTitle(Chapter.TOKEN, Token.TYPOGRAPHY, 'Mono'),
  component: mkStoryComponent<MonoVariants_t, MonoProps_t>(Mono),
  subcomponents: {
    Typography,
  },
  args: {
    ...Mono.defaultProps,
    children: 'The inner machinations of my mind are an enigma.',
  },
} as ComponentMeta<typeof Mono>;

const Template: ComponentStory<typeof Mono> = args => <Mono {...args} />;

export const Default = Template.bind({});

export const Weight = Template.bind({});
Weight.args = {
  weight: 'semiBold',
};
