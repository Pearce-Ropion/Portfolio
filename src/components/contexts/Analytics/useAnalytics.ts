import { useCallback } from 'react';
import { Context as SegmentContext } from '@segment/analytics-next';

import { useAnalytics } from 'components/contexts/Analytics/AnalyticsContext';
import {
  createPageEvent,
  createTrackEvent,
  SegmentEvent_t,
} from 'utils/events';

export type UseAnalyticsEvent_t = () => Promise<SegmentContext> | undefined;

export const useAnalyticsEvent = (
  eventName: string,
  segment?: SegmentEvent_t,
): UseAnalyticsEvent_t => {
  const analyticsContext = useAnalytics('useAnalyticsEvent');
  const { analytics } = analyticsContext;

  return useCallback(() => {
    return analytics?.track(createTrackEvent(eventName, segment));
  }, [analytics, eventName, segment]);
};

export const useAnalyticsPageEvent = (
  pageName: string,
  segment?: SegmentEvent_t,
): UseAnalyticsEvent_t => {
  const analyticsContext = useAnalytics('useAnalyticsPageEvent');
  const { analytics } = analyticsContext;

  return useCallback(() => {
    return analytics?.track(createPageEvent(pageName, segment));
  }, [analytics, pageName, segment]);
};
