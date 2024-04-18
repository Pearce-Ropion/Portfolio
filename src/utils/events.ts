import { SegmentEvent } from '@segment/analytics-next';

export type SegmentEvent_t = Omit<SegmentEvent, 'type'>;

export interface SegmentEventProps_t {
  segment?: SegmentEvent_t;
}

export const createTrackEvent = (
  eventName: string,
  segment?: SegmentEvent_t,
): SegmentEvent => {
  return {
    name: eventName,
    ...segment,
    type: 'track',
  };
};

export const createPageEvent = (
  pageName: string,
  segment?: SegmentEvent_t,
): SegmentEvent => {
  return {
    name: pageName,
    ...segment,
    type: 'page',
  };
};
