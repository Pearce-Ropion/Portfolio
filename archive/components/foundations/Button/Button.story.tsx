import { capitalize } from 'lodash-es';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

const Template: ComponentStory<typeof Button> = args => {
    const { variant } = args;
    return (
        <Button {...args}>{variant ? capitalize(variant) : 'Button'}</Button>
    );
};

export const Basic = Template.bind({});

export const AsPrimary = Template.bind({});
AsPrimary.args = {
    variant: 'primary',
};

export const AsSecondary = Template.bind({});
AsSecondary.args = {
    variant: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};

export const Inverted = Template.bind({});
Inverted.args = {
    inverted: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    icon: solid('book'),
};

export const WithIconPosition = Template.bind({});
WithIconPosition.args = {
    icon: solid('book'),
    iconPosition: 'right',
};

export default {
    title: 'Components/Button',
    component: Button,
} as ComponentMeta<typeof Button>;
