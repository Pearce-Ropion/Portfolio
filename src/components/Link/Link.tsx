import {
    AnchorHTMLAttributes,
    FC,
    HTMLAttributes,
    MouseEventHandler,
    useEffect,
    useRef,
} from 'react';
import { cx } from '@emotion/css';
import styled, { StyledComponent } from '@emotion/styled';
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

export interface StyledSpanProps
    extends LinkStylingProps,
        HTMLAttributes<HTMLSpanElement> {}

export interface StyledGatsbyLinkProps
    extends LinkStylingProps,
        GatsbyLinkProps<unknown> {}

export const StyledSpan: StyledComponent<StyledSpanProps> = styled.span(
    baseLinkStyles,
    dynamicLinkStyles
);

export const StyledGatsbyLink: StyledComponent<StyledGatsbyLinkProps> = styled(
    GatsbyLink
)(baseLinkStyles, dynamicLinkStyles);

export interface LinkProps extends LinkStylingProps, GatsbyLinkProps<unknown> {
    to: string;
    autoFocus?: boolean;
    segmentEvent?: SegmentEvent;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const Link: FC<LinkProps> = ({
    children,
    to,
    autoFocus,
    segmentEvent,
    onClick,
    ...rest
}) => {
    const linkRef = useRef<HTMLAnchorElement>(null);

    const analytics: Analytics = useAnalytics();

    useEffect(() => {
        if (autoFocus) {
            linkRef.current?.focus();
        }
    }, [autoFocus]);

    const handleClick: MouseEventHandler<HTMLAnchorElement> = async event => {
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
            <StyledSpan ref={linkRef} onClick={handleClick} {...rest}>
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
            <StyledLink ref={linkRef} href={link} {...linkProps} {...rest}>
                {children}
            </StyledLink>
        );
    } else if (isAnchorLink) {
        return (
            <AnchorLink href={link} {...linkProps} {...rest}>
                {children}
            </AnchorLink>
        );
    }

    return (
        <StyledGatsbyLink innerRef={linkRef} to={link} {...linkProps} {...rest}>
            {children}
        </StyledGatsbyLink>
    );
};
