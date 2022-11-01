import { DetailedHTMLProps, LabelHTMLAttributes } from 'react';

import { WithOverrideState, WithState } from 'components';

export interface FormLabelStateProps {
    floating?: boolean;
    inverted?: boolean;
}

export type FormLabelElement = DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
>;

export interface StyledFormLabelProps
    extends FormLabelElement,
        WithState<FormLabelStateProps> {}

export interface FormLabelProps
    extends FormLabelElement,
        WithOverrideState<FormLabelStateProps> {}
