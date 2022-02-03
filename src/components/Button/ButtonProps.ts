import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent } from 'react';
import { SegmentEvent } from '@segment/analytics-next';

import { WithOverrideState, WithState } from 'components';
import { IconFactoryIconProp } from 'components/Icon';

export const ButtonVariants = ['primary', 'secondary'] as const;
export const IconPositions = ['left', 'right'] as const;

export interface ButtonStateProps {
    variant: typeof ButtonVariants[number];
    disabled?: boolean;
    inverted?: boolean;
}

export interface ButtonHandlerProps {
    onClick?: (
        event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
    ) => void;
}

export interface StyledButtonProps
    extends DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >,
        WithState<ButtonStateProps> {}

export interface ButtonProps
    extends WithOverrideState<ButtonStateProps>,
        ButtonHandlerProps,
        Omit<
            DetailedHTMLProps<
                ButtonHTMLAttributes<HTMLButtonElement>,
                HTMLButtonElement
            >,
            keyof ButtonHandlerProps
        > {
    styledLink?: boolean;
    icon?: IconFactoryIconProp;
    iconPosition?: typeof IconPositions[number];
    segmentEvent?: SegmentEvent;
}
