import {
    ChangeEvent,
    DetailedHTMLProps,
    LabelHTMLAttributes,
    ReactNode,
    RefObject,
    TextareaHTMLAttributes as TextAreaHTMLAttributes,
} from 'react';

import { WithOverrideState, WithState } from 'components';

export interface TextAreaStateProps {
    bordered?: boolean;
    disabled?: boolean;
    filled?: boolean;
    floating?: boolean;
    focused?: boolean;
    inverted?: boolean;
}

export type TextAreaElement = DetailedHTMLProps<
    TextAreaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
>;

export interface TextAreaHandlerProps {
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>, value: string) => void;
}

export interface StyledTextAreaProps
    extends TextAreaElement,
        WithState<TextAreaStateProps> {}

export interface TextAreaProps
    extends Omit<TextAreaElement, keyof TextAreaHandlerProps>,
        TextAreaHandlerProps,
        WithOverrideState<
            TextAreaStateProps,
            Omit<TextAreaStateProps, 'filled'>
        > {
    label?: ReactNode;
    labelClassName?: string;
    textAreaRef?: RefObject<HTMLTextAreaElement>;
}

export interface StyledTextAreaLabelProps
    extends DetailedHTMLProps<
            LabelHTMLAttributes<HTMLLabelElement>,
            HTMLLabelElement
        >,
        WithState<TextAreaStateProps> {}
