import { AnchorHTMLAttributes, FC, MouseEventHandler, useRef } from 'react';
import { constant } from 'lodash-es';
import { SegmentEvent } from '@segment/analytics-next';

import { Analytics, useAnalytics } from 'components/AnalyticsContext';
import { LinkStylingProps, StyledLink } from 'components/Link';

type OffsetFn = () => number;
export interface AnchorLinkProps
    extends LinkStylingProps,
        AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string;
    offset?: number | string | OffsetFn;
    segmentEvent?: SegmentEvent;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const AnchorLink: FC<AnchorLinkProps> = ({
    children,
    href,
    offset = 0,
    segmentEvent,
    onClick,
    ...rest
}) => {
    const anchorRef = useRef<HTMLAnchorElement>(null);

    const analytics: Analytics = useAnalytics();

    let offsetFn: OffsetFn = constant(0);
    if (typeof offset === 'function') {
        offsetFn = offset;
    } else if (typeof offset === 'string') {
        offsetFn = constant(parseInt(offset, 10));
    } else if (typeof offset === 'number') {
        offsetFn = constant(offset);
    }

    const handleClick: MouseEventHandler<HTMLAnchorElement> = async event => {
        event.preventDefault();

        if (anchorRef.current) {
            const offsetTop: number =
                anchorRef.current.getBoundingClientRect().top +
                window.pageYOffset;

            window.scroll({
                top: offsetTop - offsetFn(),
                behavior: 'smooth',
            });

            window.history.replaceState(null, '', href);

            try {
                await analytics?.track('click-anchor', segmentEvent);
            } catch (err) {
                console.error(
                    '[Analytics]<AnchorLink> Unable to track `click-anchor` event',
                    err
                );
            }
        }

        if (onClick) {
            onClick(event);
        }
    };

    return (
        <StyledLink ref={anchorRef} href={href} onClick={handleClick} {...rest}>
            {children}
        </StyledLink>
    );
};
