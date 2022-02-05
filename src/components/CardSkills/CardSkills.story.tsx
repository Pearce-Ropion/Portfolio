import { duotone } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardSkills } from 'components/CardSkills';

const Template: ComponentStory<typeof CardSkills> = args => (
    <CardSkills {...args} />
);

export const Basic = Template.bind({});

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
    title: 'Content/CardSkills',
    component: CardSkills,
    args: {
        header: 'Design Software',
        icon: duotone('pencil-paintbrush'),
        skills: [
            'Adobe InDesign',
            'Adobe Illustrator',
            'Adobe Photoshop',
            'Figma',
            'Sketch',
        ],
    },
} as ComponentMeta<typeof CardSkills>;
