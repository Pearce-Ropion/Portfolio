import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormField } from 'components/form/Field';
import { FormInput } from 'components/form/Input';

import { toPixels } from 'utils/styles';

const Template: ComponentStory<typeof FormInput> = args => (
    <FormField>
        <FormInput label="First Name" name="first-name" {...args} />
    </FormField>
);

export const Basic = Template.bind({});

export const WithSuccess = Template.bind({});
WithSuccess.args = {
    success: true,
    defaultValue: 'Foo',
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'First name is a required field',
};

export default {
    title: 'Components/Form/FormInput',
    component: FormInput,
    decorators: [
        Story => (
            <div css={{ maxWidth: toPixels(300) }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof FormInput>;
