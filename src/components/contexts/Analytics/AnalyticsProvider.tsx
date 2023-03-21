import { useRef } from 'react';
import { AnalyticsBrowser } from '@segment/analytics-next';

import { SEGMENT_WRITE_KEY } from 'env';
import { AnalyticsProvider as AnalyticsProviderInner } from 'components/contexts/Analytics/AnalyticsContext';
import { Children_t, createMemoComponent } from 'utils/component';

export interface AnalyticsProviderProps_t extends Children_t {}
export const AnalyticsProvider = createMemoComponent<AnalyticsProviderProps_t>(
  ({ children }) => {
    const analyticsRef = useRef<AnalyticsBrowser>(
      AnalyticsBrowser.load({
        writeKey: SEGMENT_WRITE_KEY,
      }),
    );

    return (
      <AnalyticsProviderInner analytics={analyticsRef.current}>
        {children}
      </AnalyticsProviderInner>
    );
  },
);
