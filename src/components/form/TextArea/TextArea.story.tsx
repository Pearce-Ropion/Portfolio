import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormField } from 'components/form/Field';
import { FormTextArea } from 'components/form/TextArea';

import { toPixels } from 'utils/styles';

const Template: ComponentStory<typeof FormTextArea> = args => (
    <FormField>
        <FormTextArea label="Message" name="message" rows={5} {...args} />
    </FormField>
);

export const Basic = Template.bind({});

export const WithSuccess = Template.bind({});
WithSuccess.args = {
    success: true,
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'Message is a required field',
};

export default {
    title: 'Components/Form/FormTextArea',
    component: FormTextArea,
    decorators: [
        Story => (
            <div css={{ maxWidth: toPixels(300) }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof FormTextArea>;
