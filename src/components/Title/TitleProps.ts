import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { WithOverrideState, WithState } from 'components';
import { TypographyProps } from 'components/Text';

import { Weights } from 'styles/tokens/font';

export const DEFAULT_TITLE_WEIGHT: Weights = Weights.medium;

export const TitleVariants = ['title', 'section', 'header'] as const;
export const DEFAULT_TITLE_VARIANT: typeof TitleVariants[number] = 'header';

export const TitleTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export const DEFAULT_TITLE_TAG: typeof TitleTags[number] = 'h4';

export interface TitleStateProps extends TypographyProps {
    tag?: typeof TitleTags[number];
    variant?: typeof TitleVariants[number];
}

export type TitleElement = DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
>;

export interface StyledTitleProps
    extends TitleElement,
        WithState<TitleStateProps> {}

export interface TitleProps
    extends TitleElement,
        WithOverrideState<TitleStateProps> {}
