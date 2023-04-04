import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SkillBubble } from 'components/composites/SkillBubble/SkillBubble';
import { useInverted } from 'utils/hooks';
import {
  Chapter,
  Composite,
  mkStoryComponent,
  mkStoryTitle,
  textControl,
} from 'utils/storybook';

export default {
  title: mkStoryTitle(Chapter.COMPOSITE, Composite.COPY, 'SkillBubble'),
  component: mkStoryComponent(SkillBubble),
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
