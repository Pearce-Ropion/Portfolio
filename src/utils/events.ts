import { SegmentEvent } from '@segment/analytics-next';

export type SegmentEvent_t = Omit<SegmentEvent, 'type'>;

export const createTrackEvent = (
  eventName: string,
  segment?: SegmentEvent_t,
): SegmentEvent => {
  return {
    ...segment,
    type: 'track',
    name: eventName,
  };
};

export const createPageEvent = (
  pageName: string,
  segment?: SegmentEvent_t,
): SegmentEvent => {
  return {
    ...segment,
    type: 'page',
    name: pageName,
  };
};
