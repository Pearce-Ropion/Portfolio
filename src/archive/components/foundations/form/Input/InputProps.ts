import { FormFieldStateProps } from 'components/form/Field';
import { InputElement, InputProps } from 'components/inputs/Input';

export type FormInputElement = InputElement;

export interface FormInputProps extends FormFieldStateProps, InputProps {
    success?: boolean;
    error?: string;
    inputClassName?: string;
}
