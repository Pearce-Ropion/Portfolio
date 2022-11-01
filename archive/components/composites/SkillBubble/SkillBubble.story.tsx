import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SkillBubble } from 'components/SkillBubble';

const Template: ComponentStory<typeof SkillBubble> = args => (
    <SkillBubble {...args} />
);

export const Basic = Template.bind({});

export const WithSkill = Template.bind({});
WithSkill.args = {
    skill: 'React',
};

export const WithSubSkill = Template.bind({});
WithSubSkill.args = {
    subSkill: 'ES2020',
};

export const WithSize = Template.bind({});
WithSize.args = {
    size: 'large-x',
};

export const Bordered = Template.bind({});
Bordered.args = {
    skill: 'React',
    bordered: true,
    size: 'large',
};

export const Inverted = Template.bind({});
Inverted.args = {
    inverted: true,
};
Inverted.parameters = {
    backgrounds: {
        default: 'neutral900',
    },
};

export default {
    title: 'Content/SkillBubble',
    component: SkillBubble,
    args: {
        skill: 'Typescript',
        size: 'medium',
    },
} as ComponentMeta<typeof SkillBubble>;
