import { useCallback, useContext } from 'react';
import { Context as SegmentContext } from '@segment/analytics-next';

import {
  AnalyticsContext,
  Analytics_t,
} from 'components/contexts/Analytics/AnalyticsContext';
import {
  createPageEvent,
  createTrackEvent,
  SegmentEvent_t,
} from 'utils/events';

export const useAnalytics = (): Analytics_t => {
  const analytics = useContext(AnalyticsContext);
  if (analytics) return analytics;

  throw new Error(
    '`useAnalytics` cannot be used outside of an `AnalyticsProvider`',
  );
};

export type UseAnalyticsTracker_t = () => Promise<SegmentContext>;
export const useAnalyticsTrack = (
  eventName: string,
  segment?: SegmentEvent_t,
): UseAnalyticsTracker_t => {
  const analytics = useAnalytics();

  return useCallback(() => {
    return analytics.track(createTrackEvent(eventName, segment));
  }, [analytics, eventName, segment]);
};

export const useAnalyticsPage = (
  pageName: string,
  segment?: SegmentEvent_t,
): UseAnalyticsTracker_t => {
  const analytics = useAnalytics();

  return useCallback(() => {
    return analytics.track(createPageEvent(pageName, segment));
  }, [analytics, pageName, segment]);
};
