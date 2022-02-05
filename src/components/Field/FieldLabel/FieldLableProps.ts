import { DetailedHTMLProps, LabelHTMLAttributes } from 'react';

import { WithOverrideState, WithState } from 'components';

export interface FieldLabelStateProps {
    floating?: boolean;
    inverted?: boolean;
}

export type FieldLabelElement = DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
>;

export interface StyledFieldLabelProps
    extends FieldLabelElement,
        WithState<FieldLabelStateProps> {}

export interface FieldLabelProps
    extends FieldLabelElement,
        WithOverrideState<FieldLabelStateProps> {}
