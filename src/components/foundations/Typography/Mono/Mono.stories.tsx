import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from 'components/foundations/Typography/Typography';
import { Mono, MonoProps_t } from 'components/foundations/Typography/Mono';
import { Chapter, Token } from 'utils/storybook/chapters';
import { mkStoryTitle, mkStoryComponent } from 'utils/storybook';
import { useInverted } from 'utils/hooks';

export default {
  title: mkStoryTitle(Chapter.TOKEN, Token.TYPOGRAPHY, 'Mono'),
  component: mkStoryComponent<MonoProps_t>(Mono),
  subcomponents: {
    Typography,
  },
  args: {
    ...Mono.defaultProps,
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
