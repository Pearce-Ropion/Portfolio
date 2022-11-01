import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormField } from 'components/form/Field';
import { Input } from 'components/inputs/Input';

import { toPixels } from 'utils/styles';

const Template: ComponentStory<typeof FormField> = args => (
    <FormField {...args}>
        <Input floating label="First Name" name="fname" />
    </FormField>
);

export const Basic = Template.bind({});

export const WithRequired = Template.bind({});
WithRequired.args = {
    required: true,
};

export default {
    title: 'Components/Form/FormField',
    component: FormField,
    decorators: [
        Story => (
            <div css={{ maxWidth: toPixels(300) }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof FormField>;
