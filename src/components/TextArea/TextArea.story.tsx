import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextArea } from 'components/TextArea';

import { rangeControl } from 'utils/controls';
import { toPixels } from 'utils/styles';

const Template: ComponentStory<typeof TextArea> = args => (
    <TextArea {...args} />
);

export const Basic = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'Message',
};

export const WithFloatingLabel = Template.bind({});
WithFloatingLabel.args = {
    floating: true,
    label: 'Message',
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
    defaultValue: 'Hello World',
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
    disabled: true,
};

export default {
    title: 'Components/Inputs/TextArea',
    component: TextArea,
    args: {
        name: 'message',
        rows: 3,
    },
    argTypes: {
        rows: rangeControl({ min: 1, max: 10 }),
        onChange: {
            action: 'change',
        },
    },
    decorators: [
        Story => (
            <div css={{ maxWidth: toPixels(300) }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof TextArea>;
