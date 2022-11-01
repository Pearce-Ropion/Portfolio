import {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    ReactNode,
    RefObject,
} from 'react';

import { WithOverrideState, WithState } from 'components';
import { FormLabelElement } from 'components/form/Label';
import { IconFactoryIconProp } from 'components/Icon';

export interface InputStateProps {
    bordered?: boolean;
    disabled?: boolean;
    filled?: boolean;
    floating?: boolean;
    focused?: boolean;
    icon?: boolean;
    inverted?: boolean;
}

export type InputElement = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

export interface InputHandlerProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>, value?: string) => void;
}

export interface StyledInputProps
    extends InputElement,
        WithState<InputStateProps> {}

export interface InputProps
    extends Omit<InputElement, keyof InputHandlerProps>,
        InputHandlerProps,
        WithOverrideState<
            InputStateProps,
            Omit<InputStateProps, 'icon' | 'filled'>
        > {
    label?: ReactNode;
    labelClassName?: string;
    icon?: IconFactoryIconProp;
    inputRef?: RefObject<HTMLInputElement>;
}

export interface StyledInputLabelProps
    extends FormLabelElement,
        WithState<InputStateProps> {}
