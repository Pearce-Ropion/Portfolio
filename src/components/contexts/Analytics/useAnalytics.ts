import { useCallback } from 'react';
import type { Context as SegmentContext } from '@segment/analytics-next';

import { useIsStorybookPreview } from 'components/contexts';
import {
  createPageEvent,
  createTrackEvent,
  SegmentEvent_t,
} from 'utils/events';

import { useAnalytics } from './AnalyticsContext';

export type UseAnalyticsEvent_t = () => Promise<SegmentContext> | undefined;

export const useAnalyticsEvent = (
  defaultEventName: string,
  segment?: SegmentEvent_t,
): UseAnalyticsEvent_t => {
  const isStorybook = useIsStorybookPreview();
  const analyticsContext = useAnalytics();
  const { analytics } = analyticsContext;

  return useCallback(() => {
    if (isStorybook) return;
    if (!segment) return;

    return analytics?.track(createTrackEvent(defaultEventName, segment));
  }, [isStorybook, analytics, defaultEventName, segment]);
};

export const useAnalyticsPageEvent = (
  defaultPageName: string,
  segment?: SegmentEvent_t,
): UseAnalyticsEvent_t => {
  const isStorybook = useIsStorybookPreview();
  const analyticsContext = useAnalytics();
  const { analytics } = analyticsContext;

  return useCallback(() => {
    if (isStorybook) return;
    if (!segment) return;

    return analytics?.track(createPageEvent(defaultPageName, segment));
  }, [isStorybook, analytics, defaultPageName, segment]);
};
