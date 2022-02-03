import {
    ChangeEvent,
    DetailedHTMLProps,
    FocusEvent,
    LabelHTMLAttributes,
    MouseEvent,
    ReactNode,
    TextareaHTMLAttributes as TextAreaHTMLAttributes,
} from 'react';

import { WithOverrideState, WithState } from 'components';

export interface TextAreaStateProps {
    disabled?: boolean;
    filled?: boolean;
    floating?: boolean;
    focused?: boolean;
    inverted?: boolean;
}

export interface TextAreaHandlerProps {
    onChange?: (
        event: ChangeEvent<HTMLTextAreaElement> | MouseEvent<HTMLButtonElement>,
        value: string
    ) => void;
    onFocus?: (event?: FocusEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event?: FocusEvent<HTMLTextAreaElement>) => void;
}

export interface StyledTextAreaProps
    extends DetailedHTMLProps<
            TextAreaHTMLAttributes<HTMLTextAreaElement>,
            HTMLTextAreaElement
        >,
        WithState<TextAreaStateProps> {}

export interface TextAreaProps
    extends WithOverrideState<
            TextAreaStateProps,
            Omit<TextAreaStateProps, 'filled'>
        >,
        TextAreaHandlerProps,
        Omit<
            DetailedHTMLProps<
                TextAreaHTMLAttributes<HTMLTextAreaElement>,
                HTMLTextAreaElement
            >,
            keyof TextAreaHandlerProps
        > {
    label?: ReactNode;
}

export interface StyledTextAreaLabelProps
    extends DetailedHTMLProps<
            LabelHTMLAttributes<HTMLLabelElement>,
            HTMLLabelElement
        >,
        WithState<TextAreaStateProps> {}
