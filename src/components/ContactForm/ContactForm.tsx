import { VFC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button } from 'components/Button';
import { ContactFormProps } from 'components/ContactForm';
import { FormField } from 'components/form/Field';
import { FormInput } from 'components/form/Input';
import { FormRow } from 'components/form/Row';
import { FormTextArea } from 'components/form/TextArea';

export const ContactForm: VFC<ContactFormProps> = () => {
    const { control, handleSubmit: handleFromSubmit } = useForm();

    const handleSubmit: ContactFormProps['onSubmit'] = handleFromSubmit(
        values => {
            console.log(values);
        },
        values => {
            console.error(values);
        }
    );

    return (
        <form onSubmit={handleSubmit}>
            <FormRow>
                <Controller
                    name="first-name"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                        <FormInput
                            {...field}
                            label="First Name"
                            error={fieldState.error?.message}
                            success={
                                fieldState.isTouched && !fieldState.invalid
                            }
                        />
                    )}
                />
                <Controller
                    name="last-name"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                        <FormInput
                            {...field}
                            label="Last Name"
                            error={fieldState.error?.message}
                            success={
                                fieldState.isTouched && !fieldState.invalid
                            }
                        />
                    )}
                />
            </FormRow>
            <FormRow>
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                        <FormInput
                            {...field}
                            type="email"
                            label="Email"
                            error={fieldState.error?.message}
                            success={
                                fieldState.isTouched && !fieldState.invalid
                            }
                        />
                    )}
                />
            </FormRow>
            <FormRow>
                <Controller
                    name="message"
                    control={control}
                    render={({ field, fieldState }) => (
                        <FormTextArea
                            {...field}
                            rows={4}
                            label="Message"
                            error={fieldState.error?.message}
                            success={
                                fieldState.isTouched && !fieldState.invalid
                            }
                        />
                    )}
                />
            </FormRow>
            <FormRow>
                <FormField css={{ display: 'flex', justifyContent: 'center' }}>
                    <Button inverted type="submit">
                        Send Message
                    </Button>
                </FormField>
            </FormRow>
        </form>
    );
};
