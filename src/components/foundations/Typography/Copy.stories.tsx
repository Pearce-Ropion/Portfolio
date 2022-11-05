import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from 'components/foundations/Typography/Typography';
import {
  Copy,
  CopyProps_t,
  CopyVariants_t,
} from 'components/foundations/Typography/Copy';
import { Chapter, Token } from 'utils/storybook/chapters';
import { mkStoryTitle, mkStoryComponent } from 'utils/storybook';

export default {
  title: mkStoryTitle(Chapter.TOKENS, Token.TYPOGRAPHY, 'Copy'),
  component: mkStoryComponent<CopyVariants_t, CopyProps_t>(Copy),
  subcomponents: {
    Typography,
  },
  args: {
    ...Copy.defaultProps,
    children: 'The inner machinations of my mind are an enigma.',
  },
} as ComponentMeta<typeof Copy>;

const Template: ComponentStory<typeof Copy> = args => <Copy {...args} />;

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.storyName = 'Medium (default)';
Medium.args = {
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Weight = Template.bind({});
Weight.args = {
  weight: 'semiBold',
};
