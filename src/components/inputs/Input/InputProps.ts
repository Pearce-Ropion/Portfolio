import {
    ChangeEvent,
    DetailedHTMLProps,
    FocusEvent,
    InputHTMLAttributes,
    LabelHTMLAttributes,
    MouseEvent,
    ReactNode,
} from 'react';

import { WithOverrideState, WithState } from 'components';
import { IconFactoryIconProp } from 'components/Icon';

export interface InputStateProps {
    disabled?: boolean;
    filled?: boolean;
    floating?: boolean;
    focused?: boolean;
    icon?: boolean;
    inverted?: boolean;
}

export interface InputHandlerProps {
    onChange?: (
        event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>,
        value: string
    ) => void;
    onFocus?: (event?: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event?: FocusEvent<HTMLInputElement>) => void;
}

export interface StyledInputProps
    extends DetailedHTMLProps<
            InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
        >,
        WithState<InputStateProps> {}

export interface InputProps
    extends WithOverrideState<
            InputStateProps,
            Omit<InputStateProps, 'icon' | 'filled'>
        >,
        InputHandlerProps,
        Omit<
            DetailedHTMLProps<
                InputHTMLAttributes<HTMLInputElement>,
                HTMLInputElement
            >,
            keyof InputHandlerProps
        > {
    label?: ReactNode;
    icon?: IconFactoryIconProp;
}

export interface StyledInputLabelProps
    extends DetailedHTMLProps<
            LabelHTMLAttributes<HTMLLabelElement>,
            HTMLLabelElement
        >,
        WithState<InputStateProps> {}
