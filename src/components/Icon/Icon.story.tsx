import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Icon } from 'components/Icon';

import { disablePropControls } from 'utils/controls';

import { Colors } from 'styles/tokens/colors';

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Basic = Template.bind({});

export const Colored = Template.bind({});
Colored.args = {
    color: Colors.orange900,
};

export const WithTitle = Template.bind({});
WithTitle.args = {
    title: 'Open Library',
};
WithTitle.parameters = {
    notes: 'Hover over the icon until the title appears',
};

export const WithMarginLeft = Template.bind({});
WithMarginLeft.args = {
    marginLeft: true,
};

export const WithMarginRight = Template.bind({});
WithMarginRight.args = {
    marginRight: true,
};

export default {
    title: 'Components/Icons/Icon',
    component: Icon,
    args: {
        icon: solid('book'),
        size: '3x',
    },
    argTypes: {
        ...disablePropControls([
            'primaryColor',
            'primaryColorOpacity',
            'secondaryColor',
            'secondaryColorOpacity',
        ]),
    },
} as ComponentMeta<typeof Icon>;
