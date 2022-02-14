import { DetailedHTMLProps, HTMLAttributes, MouseEvent } from 'react';
import { SegmentEvent } from '@segment/analytics-next';

import { WithOverrideState, WithState } from 'components';

export interface CardStateProps {
    hover?: boolean;
    inverted?: boolean;
    shadow?: boolean;
    link?: boolean;
    disabled?: boolean;
}

export interface CardHandlerProps {
    onClick?: (event: MouseEvent<HTMLDivElement | HTMLAnchorElement>) => void;
}

export type CardElement = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface StyledCardProps
    extends CardElement,
        WithState<CardStateProps> {}

export interface CardProps
    extends Omit<CardElement, keyof CardHandlerProps>,
        CardHandlerProps,
        WithOverrideState<CardStateProps, Omit<CardStateProps, 'link'>> {
    to?: string;
    segmentEvent?: SegmentEvent;
}
