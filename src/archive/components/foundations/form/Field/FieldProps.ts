import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { WithOverrideState, WithState } from 'components';

export type FormFieldElemnt = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FormFieldStateProps {
    required?: boolean;
}

export interface StyledFormFieldProps
    extends FormFieldElemnt,
        WithState<FormFieldStateProps> {}

export interface FormFieldProps
    extends FormFieldElemnt,
        WithOverrideState<FormFieldStateProps> {}
