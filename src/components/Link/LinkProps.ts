import { AnchorHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from 'react';
import { SegmentEvent } from '@segment/analytics-next';
import { GatsbyLinkProps } from 'gatsby';

import { WithOverrideState, WithState } from 'components';
import { ButtonVariants } from 'components/Button';

export const LinkVariants = ['styled', ...ButtonVariants, 'unstyled'] as const;

export interface LinkStateProps {
    variant?: typeof LinkVariants[number];
    inverted?: boolean;
    disabled?: boolean;
    styled?: boolean;
}

export interface LinkHandlerProps {
    onClick?: GatsbyLinkProps<unknown>['onClick'];
}

export interface StyledSpanLinkProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
        WithState<LinkStateProps> {}

export interface StyledLinkProps
    extends DetailedHTMLProps<
            AnchorHTMLAttributes<HTMLAnchorElement>,
            HTMLAnchorElement
        >,
        WithState<LinkStateProps> {}

export interface StyledGatsbyLinkProps
    extends GatsbyLinkProps<unknown>,
        WithState<LinkStateProps> {}

export interface LinkProps
    extends WithOverrideState<LinkStateProps>,
        LinkHandlerProps,
        Omit<GatsbyLinkProps<unknown>, 'to' | 'onClick'> {
    to?: string;
    autoFocus?: boolean;
    segmentEvent?: SegmentEvent;
}
