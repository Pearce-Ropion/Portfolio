import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  Typography,
  TypographyProps_t,
} from 'components/foundations/Typography/Typography';
import { Chapter, Token } from 'utils/storybook/chapters';
import { mkStoryTitle, mkStoryComponent } from 'utils/storybook';

export default {
  title: mkStoryTitle(Chapter.TOKEN, Token.TYPOGRAPHY, 'Typography'),
  component: mkStoryComponent<TypographyProps_t>(Typography),
  args: {
    ...Typography.defaultProps,
    children: 'The inner machinations of my mind are an enigma.',
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = args => (
  <Typography {...args} />
);

export const Default = Template.bind({});
