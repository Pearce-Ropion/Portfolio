import { duotone } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DuotoneIcon } from 'components/Icon';

import { colorControl, rangeControl } from 'utils/controls';

import { Colors } from 'styles/tokens/colors';

const Template: ComponentStory<typeof DuotoneIcon> = args => (
    <DuotoneIcon {...args} />
);

export const Basic = Template.bind({});

export const Colored = Template.bind({});
Colored.args = {
    color: Colors.orange900,
};

export const WithSwapOpacity = Template.bind({});
WithSwapOpacity.args = {
    swapOpacity: true,
};

export const WithPrimaryColor = Template.bind({});
WithPrimaryColor.args = {
    primaryColor: Colors.orange900,
};

export const WithPrimaryColorOpacity = Template.bind({});
WithPrimaryColorOpacity.args = {
    primaryColor: Colors.orange900,
    primaryColorOpacity: 0.5,
};

export const WithSecondaryColor = Template.bind({});
WithSecondaryColor.args = {
    primaryColor: Colors.navy900,
    secondaryColor: Colors.orange900,
};

export const WithSecondaryColorOpacity = Template.bind({});
WithSecondaryColorOpacity.args = {
    primaryColor: Colors.navy900,
    secondaryColor: Colors.orange900,
    secondaryColorOpacity: 0.9,
};

export default {
    title: 'Components/Icons/DuotoneIcon',
    component: DuotoneIcon,
    args: {
        icon: duotone('book'),
        size: '3x',
    },
    argTypes: {
        primaryColor: colorControl,
        primaryColorOpacity: rangeControl({ min: 0, max: 1, step: 0.1 }),
        secondaryColor: colorControl,
        secondaryColorOpacity: rangeControl({ min: 0, max: 1, step: 0.1 }),
    },
} as ComponentMeta<typeof DuotoneIcon>;
