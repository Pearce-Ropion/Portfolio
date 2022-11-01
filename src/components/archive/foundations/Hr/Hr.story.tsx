import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Hr } from 'components/Hr';
import { Lorem } from 'components/Lorem';

import { Shorthand } from 'utils/styles';

const Template: ComponentStory<typeof Hr> = args => (
    <Hr css={{ margin: Shorthand.marginToEm(1, 0) }} {...args} />
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

export const WithFullBleed = Template.bind({});
WithFullBleed.args = {
    fullBleed: true,
};

export default {
    title: 'Components/Hr',
    component: Hr,
    decorators: [
        (Story, context) => {
            const { args } = context;

            return (
                <div>
                    <Lorem inverted={args.inverted} />
                    <Story />
                    <Lorem inverted={args.inverted} />
                </div>
            );
        },
    ],
} as ComponentMeta<typeof Hr>;
