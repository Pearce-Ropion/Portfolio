import { AnchorHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from 'react';
import { SegmentEvent } from '@segment/analytics-next';
import { GatsbyLinkProps } from 'gatsby';

import { WithOverrideState, WithState } from 'components';
import { ButtonVariants } from 'components/Button';

export const LinkVariants = ['styled', ...ButtonVariants, 'unstyled'] as const;
export const DEFAULT_LINK_VARIANT: typeof LinkVariants[number] = 'styled';

export interface LinkStateProps {
    variant?: typeof LinkVariants[number];
    inverted?: boolean;
    disabled?: boolean;
}

export interface LinkHandlerProps {
    onClick?: GatsbyLinkProps<unknown>['onClick'];
}

export type SpanLinkElement = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>;

export type LinkElement = DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
>;

export type GatsbyLinkElement = GatsbyLinkProps<unknown>;

export interface StyledSpanLinkProps
    extends SpanLinkElement,
        WithState<LinkStateProps> {}

export interface StyledLinkProps
    extends LinkElement,
        WithState<LinkStateProps> {}

export interface StyledGatsbyLinkProps
    extends GatsbyLinkElement,
        WithState<LinkStateProps> {}

export interface LinkProps
    extends Omit<GatsbyLinkElement, 'to' | 'onClick'>,
        LinkHandlerProps,
        WithOverrideState<LinkStateProps> {
    to?: string;
    autoFocus?: boolean;
    segmentEvent?: SegmentEvent;
}
