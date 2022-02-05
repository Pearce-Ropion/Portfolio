import { DetailedHTMLProps, ParamHTMLAttributes } from 'react';

import { WithOverrideState, WithState } from 'components';

export const TextWeights = [
    'thin',
    'light',
    'normal',
    'medium',
    'semibold',
    'bold',
    'black',
] as const;
export const DEFAULT_TEXT_WEIGHT: typeof TextWeights[number] = 'normal';

export interface TypographyProps {
    alignCenter?: boolean;
    alignCenterMobile?: boolean;
    alignRight?: boolean;
    inverted?: boolean;
    color?: string;
    inline?: boolean;
}

export interface TextStateProps extends TypographyProps {
    weight?: typeof TextWeights[number];
}

export type TextElement = DetailedHTMLProps<
    ParamHTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
>;

export interface StyledTextProps
    extends TextElement,
        WithState<TextStateProps> {}

export interface TextProps
    extends TextElement,
        WithOverrideState<TextStateProps> {}
