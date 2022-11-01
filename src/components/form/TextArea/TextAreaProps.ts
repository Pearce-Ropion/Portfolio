import { FormFieldStateProps } from 'components/form/Field';
import { TextAreaElement, TextAreaProps } from 'components/inputs/TextArea';

export type FormTextAreaElement = TextAreaElement;

export interface FormTextAreaProps extends FormFieldStateProps, TextAreaProps {
    success?: boolean;
    error?: string;
    textAreaClassName?: string;
}
