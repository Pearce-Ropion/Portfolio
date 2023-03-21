import { AnalyticsBrowser } from '@segment/analytics-next';

import { createContext } from 'utils/context';

export interface AnalyticsContext_t {
  analytics?: AnalyticsBrowser;
}

export const [AnalyticsProvider, useAnalytics] =
  createContext<AnalyticsContext_t>('Analytics');
