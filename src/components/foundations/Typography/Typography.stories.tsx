import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  Typography,
  TypographyProps_t,
} from 'components/foundations/Typography/Typography';
import { Chapter, Token } from 'utils/storybook/chapters';
import { mkStoryTitle, mkStoryComponent } from 'utils/storybook';
import { useInverted } from 'utils/hooks';

export default {
  title: mkStoryTitle(Chapter.TOKEN, Token.TYPOGRAPHY, 'Typography'),
  component: mkStoryComponent<TypographyProps_t>(Typography),
  args: {
    ...Typography.defaultProps,
    children: 'The inner machinations of my mind are an enigma.',
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = args => {
  const inverted = useInverted();
  return <Typography {...args} inverted={inverted} />;
};

export const Default = Template.bind({});
