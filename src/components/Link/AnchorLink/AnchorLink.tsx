import { FC, memo, MouseEventHandler, useRef } from 'react';
import { constant } from 'lodash-es';

import { Analytics, useAnalytics } from 'components/AnalyticsContext';
import {
    AnchorLinkOffsetFn,
    AnchorLinkProps,
    DEFAULT_LINK_VARIANT,
    LinkStateProps,
    StyledLink,
} from 'components/Link';

export const anchorTrackEventName = 'click-anchor';

export const AnchorLink: FC<AnchorLinkProps> = memo(
    ({
        children,
        variant = DEFAULT_LINK_VARIANT,
        inverted,
        disabled,
        to,
        offset = 0,
        segmentEvent,
        onClick,
        componentState = {},
        ...props
    }) => {
        const anchorRef = useRef<HTMLAnchorElement>(null);

        const analytics: Analytics = useAnalytics();

        let offsetFn: AnchorLinkOffsetFn = constant(0);
        if (typeof offset === 'function') {
            offsetFn = offset;
        } else if (typeof offset === 'string') {
            offsetFn = constant(parseInt(offset, 10));
        } else if (typeof offset === 'number') {
            offsetFn = constant(offset);
        }

        const handleClick: MouseEventHandler<
            HTMLAnchorElement
        > = async event => {
            event.preventDefault();

            if (anchorRef.current) {
                const offsetTop: number =
                    anchorRef.current.getBoundingClientRect().top +
                    window.pageYOffset;

                window.scroll({
                    top: offsetTop - offsetFn(),
                    behavior: 'smooth',
                });

                window.history.replaceState(null, '', to);

                try {
                    await analytics?.track(anchorTrackEventName, segmentEvent);
                } catch (err) {
                    console.error(
                        `[Analytics]<AnchorLink> Unable to track '${anchorTrackEventName}' event`,
                        err
                    );
                }
            }

            if (onClick) {
                onClick(event);
            }
        };

        const anchorLinkState: LinkStateProps = {
            variant,
            inverted,
            disabled,
            ...componentState,
        };

        return (
            <StyledLink
                ref={anchorRef}
                href={to}
                componentState={anchorLinkState}
                onClick={handleClick}
                {...props}
            >
                {children}
            </StyledLink>
        );
    }
);
