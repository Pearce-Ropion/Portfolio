import { TextAreaElement, TextAreaProps } from 'components/inputs/TextArea';

export type FormTextAreaElement = TextAreaElement;

export interface FormTextAreaProps extends TextAreaProps {
    success?: boolean;
    error?: string;
    textAreaClassName?: string;
}
