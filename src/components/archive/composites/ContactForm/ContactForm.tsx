import { ReactNode, useCallback, useState, VFC } from 'react';
import { useForm as useFormspree } from '@formspree/react';
import { duotone } from '@fortawesome/fontawesome-svg-core/import.macro';
import { joiResolver } from '@hookform/resolvers/joi';
import {
    Controller,
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
} from 'react-hook-form';

import { FORMSPREE_KEY } from 'config';

import { Button, ButtonProps } from 'components/Button';
import {
    ContactFormFieldValues,
    ContactFormProps,
    ContactFormSchema,
    ContactFormValues,
} from 'components/ContactForm';
import { FormField } from 'components/form/Field';
import { FormInput } from 'components/form/Input';
import { FormRow } from 'components/form/Row';
import { FormTextArea } from 'components/form/TextArea';
import { Icon } from 'components/Icon';

import { HookStatus } from 'utils/hooks/status';
import {
    useReCaptcha,
    UseReCaptchaReturnValue,
} from 'utils/hooks/use-recaptcha';
import { toPixels } from 'utils/styles';

export const ContactForm: VFC<ContactFormProps> = ({
    onValidationSuccess,
    onValidationError,
    onSubmit,
    onSubmitError,
    ...props
}) => {
    const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

    const [formspreeState, handleForspreeSubmit] = useFormspree(FORMSPREE_KEY);

    const handleReCaptchaScriptResolved = useCallback(() => {
        setSubmitDisabled(false);
    }, []);

    const {
        control,
        handleSubmit: handleSubmitValidation,
        getValues,
    } = useForm<ContactFormFieldValues>({
        mode: 'onBlur',
        resolver: joiResolver(ContactFormSchema),
    });

    const handleSubmit = useCallback(
        async (reCaptchaToken: string) => {
            const formData: ContactFormValues = {
                ...getValues(),
                'g-recaptcha-response': reCaptchaToken,
            };

            if (onSubmit) {
                onSubmit(formData);
            }

            try {
                await handleForspreeSubmit(formData);
            } catch (err) {
                if (onSubmitError) {
                    onSubmitError(formData, err);
                }
            }
        },
        [getValues, handleForspreeSubmit, onSubmit, onSubmitError]
    );

    const recaptcha: UseReCaptchaReturnValue = useReCaptcha({
        containerId: 'contact-form-captcha',
        onLoad: handleReCaptchaScriptResolved,
        onLoadError: handleReCaptchaScriptResolved,
        onSuccess: handleSubmit,
        onError: onSubmitError,
    });

    const handleSubmitValidationSuccess: SubmitHandler<
        ContactFormFieldValues
    > = (...args) => {
        if (recaptcha.status === HookStatus.READY) {
            recaptcha.execute();
        }

        if (onValidationSuccess) {
            onValidationSuccess(...args);
        }
    };

    const handleSubmitValidationError: SubmitErrorHandler<
        ContactFormFieldValues
    > = (errors, event) => {
        console.error(errors);

        if (onValidationError) {
            onValidationError(errors, event);
        }
    };

    const handleFormValidation = handleSubmitValidation(
        handleSubmitValidationSuccess,
        handleSubmitValidationError
    );

    let submitButtonInner: ReactNode = 'Send Message';
    if (formspreeState.succeeded) {
        submitButtonInner = 'Message Sent';
    }

    let submitButtonIcon: ButtonProps['icon'];
    if (formspreeState.submitting) {
        submitButtonIcon = (
            <Icon duotone spin icon={duotone('spinner-third')} />
        );
    } else if (formspreeState.succeeded) {
        submitButtonIcon = duotone('paper-plane');
    }

    return (
        <form
            {...props}
            css={{
                maxWidth: toPixels(520),
            }}
            onSubmit={handleFormValidation}
        >
            {recaptcha.container}
            <FormRow>
                <Controller
                    name="first-name"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                        <FormInput
                            {...field}
                            required
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
                            required
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
                            required
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
                    <Button
                        inverted
                        type="submit"
                        disabled={submitDisabled || formspreeState.submitting}
                        icon={submitButtonIcon}
                        iconPosition="right"
                    >
                        {submitButtonInner}
                    </Button>
                </FormField>
            </FormRow>
        </form>
    );
};
