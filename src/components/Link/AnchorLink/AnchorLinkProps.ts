import { SegmentEvent } from '@segment/analytics-next';

import { WithOverrideState } from 'components';
import { LinkElement, LinkHandlerProps, LinkStateProps } from 'components/Link';

export type AnchorLinkOffsetFn = () => number;

export interface AnchorLinkProps
    extends Omit<LinkElement, 'to' | 'onClick'>,
        LinkHandlerProps,
        WithOverrideState<LinkStateProps> {
    to?: string;
    segmentEvent?: SegmentEvent;
    offset?: number | string | AnchorLinkOffsetFn;
}
