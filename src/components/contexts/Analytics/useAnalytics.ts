import { useCallback } from 'react';
import { Context as SegmentContext } from '@segment/analytics-next';

import { useAnalytics } from 'components/contexts/Analytics/AnalyticsContext';
import {
  createPageEvent,
  createTrackEvent,
  SegmentEvent_t,
} from 'utils/events';
import { useIsStorybookPreview } from 'components/contexts';

export type UseAnalyticsEvent_t = () => Promise<SegmentContext> | undefined;

export const useAnalyticsEvent = (
  eventName: string,
  segment?: SegmentEvent_t,
): UseAnalyticsEvent_t => {
  const isStorybook = useIsStorybookPreview();
  const analyticsContext = useAnalytics();
  const { analytics } = analyticsContext;

  return useCallback(() => {
    if (!isStorybook) {
      return analytics?.track(createTrackEvent(eventName, segment));
    }
  }, [isStorybook, analytics, eventName, segment]);
};

export const useAnalyticsPageEvent = (
  pageName: string,
  segment?: SegmentEvent_t,
): UseAnalyticsEvent_t => {
  const isStorybook = useIsStorybookPreview();
  const analyticsContext = useAnalytics();
  const { analytics } = analyticsContext;

  return useCallback(() => {
    if (!isStorybook) {
      return analytics?.track(createPageEvent(pageName, segment));
    }
  }, [isStorybook, analytics, pageName, segment]);
};
