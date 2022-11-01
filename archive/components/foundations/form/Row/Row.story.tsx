import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormField } from 'components/form/Field';
import { FormRow } from 'components/form/Row';
import { Input } from 'components/inputs/Input';

export const Basic: ComponentStory<typeof FormRow> = () => (
    <FormRow>
        <FormField>
            <Input floating label="First Name" name="fname" />
        </FormField>
    </FormRow>
);

export const MultipleFields: ComponentStory<typeof FormRow> = () => (
    <FormRow>
        <FormField>
            <Input floating label="First Name" name="fname" />
        </FormField>
        <FormField>
            <Input floating label="Last Name" name="lname" />
        </FormField>
    </FormRow>
);

export default {
    title: 'Components/Form/FormRow',
    component: FormRow,
} as ComponentMeta<typeof FormRow>;
