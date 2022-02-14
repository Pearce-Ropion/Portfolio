import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { InputProps } from 'components/inputs/Input';

export type FormInputElement = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

export interface FormInputProps extends InputProps {
    success?: boolean;
    error?: boolean;
}
