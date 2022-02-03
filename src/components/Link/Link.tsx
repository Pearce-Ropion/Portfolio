import {
    AnchorHTMLAttributes,
    FC,
    HTMLAttributes,
    memo,
    useEffect,
    useRef,
} from 'react';
import { cx } from '@emotion/css';

import { WithState } from 'components';
import { Analytics, useAnalytics } from 'components/AnalyticsContext';
import {
    analyzeLink,
    AnchorLink,
    LinkProps,
    LinkStateProps,
    StyledGatsbyLink,
    StyledLink,
    StyledSpanLink,
} from 'components/Link';

export const Link: FC<LinkProps> = memo(
    ({
        children,
        variant = 'styled',
        inverted,
        disabled,
        to,
        autoFocus,
        segmentEvent,
        componentState,
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

        const linkState: LinkStateProps = {
            ...componentState,
            variant,
            disabled,
            inverted,
        };

        if (!to) {
            const spanProps: HTMLAttributes<HTMLSpanElement> &
                WithState<LinkStateProps> = {
                componentState: linkState,
                onClick: handleClick,
            };

            return (
                <StyledSpanLink ref={spanRef} {...spanProps} {...props}>
                    {children}
                </StyledSpanLink>
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

        const linkProps: AnchorHTMLAttributes<HTMLAnchorElement> &
            WithState<LinkStateProps> = {
            rel,
            componentState: linkState,
            onClick: handleClick,
        };

        if (isTelephoneLink || isExternalLink) {
            if (!isPortfolioLink) {
                linkProps.target = '_blank';
            }

            return (
                <StyledLink ref={linkRef} href={link} {...linkProps} {...props}>
                    {children}
                </StyledLink>
            );
        } else if (isAnchorLink) {
            return (
                <AnchorLink href={link} {...linkProps} {...props}>
                    {children}
                </AnchorLink>
            );
        }

        return (
            <StyledGatsbyLink
                innerRef={linkRef}
                to={link}
                {...linkProps}
                {...props}
            >
                {children}
            </StyledGatsbyLink>
        );
    }
);
