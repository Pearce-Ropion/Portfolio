import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from 'components/Card';
import { Lorem } from 'components/Lorem';

const Template: ComponentStory<typeof Card> = args => (
    <Card {...args}>
        <Lorem inverted={args.inverted} />
    </Card>
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

export const WithHover = Template.bind({});
WithHover.args = {
    hover: true,
};

export const WithShadow = Template.bind({});
WithShadow.args = {
    shadow: true,
};

export default {
    title: 'Components/Card',
    component: Card,
} as ComponentMeta<typeof Card>;
