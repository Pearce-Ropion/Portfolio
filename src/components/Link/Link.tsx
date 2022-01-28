import {
    AnchorHTMLAttributes,
    FC,
    forwardRef,
    HTMLAttributes,
    MouseEventHandler,
    useEffect,
    useRef,
} from 'react';
import { cx } from '@emotion/css';
import eStyled from '@emotion/styled';
import { SegmentEvent } from '@segment/analytics-next';
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';

import { Analytics, useAnalytics } from 'components/AnalyticsContext';
import {
    analyzeLink,
    AnchorLink,
    baseLinkStyles,
    dynamicLinkStyles,
    LinkStylingProps,
    StyledLink,
} from 'components/Link';

import { themeSelectors, useTheme } from 'state/theme';

import { withStyles } from 'utils/with-styles';

export interface StyledSpanProps
    extends LinkStylingProps,
        HTMLAttributes<HTMLSpanElement> {}

export const StyledSpan = forwardRef<HTMLSpanElement, StyledSpanProps>(
    ({ styled, inverted, ...props }, ref) => {
        const themeIsInverted = useTheme(themeSelectors.inverted);

        return withStyles<StyledSpanProps, HTMLSpanElement>(
            eStyled.span(
                baseLinkStyles,
                dynamicLinkStyles({
                    styled,
                    inverted: inverted || themeIsInverted,
                })
            ),
            props,
            ref
        );
    }
);

export interface StyledGatsbyLinkProps
    extends LinkStylingProps,
        GatsbyLinkProps<unknown> {}

export const StyledGatsbyLink: FC<StyledGatsbyLinkProps> = ({
    styled,
    inverted,
    ...props
}) => {
    const themeIsInverted = useTheme(themeSelectors.inverted);

    return withStyles<StyledGatsbyLinkProps>(
        eStyled(GatsbyLink)(
            baseLinkStyles,
            dynamicLinkStyles({
                styled,
                inverted: inverted || themeIsInverted,
            })
        ),
        props
    );
};

export interface LinkProps
    extends LinkStylingProps,
        Partial<GatsbyLinkProps<unknown>> {
    to?: string;
    autoFocus?: boolean;
    segmentEvent?: SegmentEvent;
    onClick?: MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
}

export const Link: FC<LinkProps> = ({
    children,
    styled = true,
    to,
    autoFocus,
    segmentEvent,
    onClick,
    ...props
}) => {
    const spanRef = useRef<HTMLSpanElement>(null);
    const linkRef = useRef<HTMLAnchorElement>(null);

    const analytics: Analytics = useAnalytics();

    useEffect(() => {
        if (autoFocus) {
            if (!to) {
                spanRef.current?.focus();
            } else {
                linkRef.current?.focus();
            }
        }
    }, [to, autoFocus]);

    const handleClick: Required<LinkProps>['onClick'] = async event => {
        if (onClick) {
            onClick(event);
        }

        try {
            await analytics?.track('click-link', segmentEvent);
        } catch (err) {
            console.error(
                '[Analytics] Unable to track `click-link` event',
                err
            );
        }
    };

    if (!to) {
        return (
            <StyledSpan
                styled={styled}
                onClick={handleClick}
                {...props}
                ref={spanRef}
            >
                {children}
            </StyledSpan>
        );
    }

    const {
        link,
        isExternalLink,
        isTelephoneLink,
        isAnchorLink,
        isPortfolioLink,
    } = analyzeLink(to);

    const rel: string = cx({
        noopener: !(isPortfolioLink || isTelephoneLink) || isExternalLink,
        noreferrer: !(isPortfolioLink || isTelephoneLink) || isExternalLink,
        nofollow: isTelephoneLink,
    });

    const linkProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
        rel,
        onClick: handleClick,
    };

    if (isTelephoneLink || isExternalLink) {
        if (!isPortfolioLink) {
            linkProps.target = '_blank';
        }

        return (
            <StyledLink
                styled={styled}
                href={link}
                {...linkProps}
                {...props}
                ref={linkRef}
            >
                {children}
            </StyledLink>
        );
    } else if (isAnchorLink) {
        return (
            <AnchorLink href={link} styled={styled} {...linkProps} {...props}>
                {children}
            </AnchorLink>
        );
    }

    return (
        <StyledGatsbyLink
            innerRef={linkRef}
            to={link}
            styled={styled}
            {...linkProps}
            {...props}
        >
            {children}
        </StyledGatsbyLink>
    );

    // return null;
};
