import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormField } from 'components/form/Field';
import { Input } from 'components/inputs/Input';

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
} as ComponentMeta<typeof FormField>;
