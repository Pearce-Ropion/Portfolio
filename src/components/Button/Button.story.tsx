import { capitalize } from 'lodash-es';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from 'components/Button';

// import { solid } from 'components/Icon';

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

export const AsLink = Template.bind({});
AsLink.args = {
    variant: 'link',
};

export const WithMarginLeft = Template.bind({});
WithMarginLeft.args = {
    marginLeft: true,
};

export const WithMarginRight = Template.bind({});
WithMarginRight.args = {
    marginRight: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};

export const Inverted = Template.bind({});
Inverted.args = {
    inverted: true,
};

export const WithTo = Template.bind({});
WithTo.args = {
    to: '/contact',
};

// export const WithIcon = Template.bind({});
// WithIcon.args = {
//     icon: solid('book'),
// };

// export const WithIconPosition = Template.bind({});
// WithIconPosition.args = {
//     icon: solid('book'),
//     iconPosition: 'right',
// };

export default {
    title: 'Components/Button',
    component: Button,
} as ComponentMeta<typeof Button>;
