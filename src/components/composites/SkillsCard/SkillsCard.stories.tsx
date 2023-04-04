import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SkillsCard } from 'components/composites/SkillsCard/SkillsCard';
import { useInverted } from 'utils/hooks';
import { iconControl } from 'utils/library';
import {
  Chapter,
  Composite,
  mkStoryComponent,
  mkStoryTitle,
  textControl,
} from 'utils/storybook';

export default {
  title: mkStoryTitle(Chapter.COMPOSITE, Composite.COPY, 'SkillsCard'),
  component: mkStoryComponent(SkillsCard),
  args: {
    ...SkillsCard.defaultProps,
    icon: 'edit',
    title: 'Design Software',
    skills: [
      'Adobe InDesign',
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Figma',
      'Sketch',
    ],
  },
  argTypes: {
    icon: iconControl,
    title: textControl,
  },
} as ComponentMeta<typeof SkillsCard>;

const Template: ComponentStory<typeof SkillsCard> = args => {
  const inverted = useInverted();
  return <SkillsCard {...args} inverted={inverted} />;
};

export const Default = Template.bind({});

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};
