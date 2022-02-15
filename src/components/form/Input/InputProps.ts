import { InputElement, InputProps } from 'components/inputs/Input';

export type FormInputElement = InputElement;

export interface FormInputProps extends InputProps {
    success?: boolean;
    error?: string;
    inputClassName?: string;
}
