import { DetailedHTMLProps, FormHTMLAttributes } from 'react';

export type ContactFormElement = DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
>;

export type ContactFormProps = ContactFormElement;
