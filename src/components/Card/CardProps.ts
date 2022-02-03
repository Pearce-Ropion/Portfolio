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

export interface StyledCardProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        WithState<CardStateProps> {}

export interface CardProps
    extends WithOverrideState<CardStateProps, Omit<CardStateProps, 'link'>>,
        CardHandlerProps,
        Omit<
            DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
            keyof CardHandlerProps
        > {
    to?: string;
    segmentEvent?: SegmentEvent;
}
