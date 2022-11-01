import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from 'components/inputs/Input';

import { toPixels } from 'utils/styles';

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Basic = Template.bind({});

export const WithIcon = Template.bind({});
WithIcon.args = {
    icon: regular('search'),
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'First Name',
};

export const WithFloatingLabel = Template.bind({});
WithFloatingLabel.args = {
    floating: true,
    label: 'First Name',
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
    title: 'Components/Inputs/Input',
    component: Input,
    args: {
        name: 'first-name',
    },
    argTypes: {
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
} as ComponentMeta<typeof Input>;
