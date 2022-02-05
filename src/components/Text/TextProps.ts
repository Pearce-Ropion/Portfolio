import { DetailedHTMLProps, ParamHTMLAttributes } from 'react';

import { WithOverrideState, WithState } from 'components';

import { Weights } from 'styles/tokens/font';

export const DEFAULT_TEXT_WEIGHT: Weights = Weights.normal;

export interface TypographyProps {
    alignCenter?: boolean;
    alignCenterMobile?: boolean;
    alignRight?: boolean;
    inverted?: boolean;
    color?: string;
    inline?: boolean;
    weight?: Weights;
}

export type TextStateProps = TypographyProps;

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
