import { ComponentMeta, ComponentStory } from '@storybook/react';

import { useInverted } from '@sb/utils/hooks';
import { Chapter, Composite, mkStoryTitle, textControl } from 'utils/storybook';

import { SkillBubble } from './SkillBubble';

export default {
  title: mkStoryTitle(Chapter.COMPOSITE, Composite.COPY, 'SkillBubble'),
  component: SkillBubble,
  args: {
    ...SkillBubble.defaultProps,
    skill: 'Javascript',
    size: 'medium',
  },
  argTypes: {
    skill: textControl,
    subSkill: textControl,
  },
} as ComponentMeta<typeof SkillBubble>;

const Template: ComponentStory<typeof SkillBubble> = args => {
  const inverted = useInverted();
  return <SkillBubble {...args} inverted={inverted} />;
};

export const Default = Template.bind({});

export const SubSkill = Template.bind({});
SubSkill.args = {
  subSkill: 'Typescript',
};

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};

export const Duotone = Template.bind({});
Duotone.args = {
  duotone: true,
};
