import { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';

export interface ContactFormFieldValues {
    'first-name': string;
    'last-name': string;
    email: string;
    message: string;
}
export interface ContactFormValues extends ContactFormFieldValues {
    'g-recaptcha-response'?: string;
}

export type ContactFormElement = DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
>;

export interface ContactFormHandlerProps<T = ContactFormValues> {
    onSubmit?: (values: T) => void;
    onSubmitError?: (values?: T, err?: unknown) => void;
    onValidationSuccess?: SubmitHandler<T>;
    onValidationError?: SubmitErrorHandler<T>;
}

export interface ContactFormProps
    extends Omit<ContactFormElement, 'onSubmit'>,
        ContactFormHandlerProps {}
