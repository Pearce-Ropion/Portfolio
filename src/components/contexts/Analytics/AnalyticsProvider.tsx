import { useRef, memo } from 'react';
import { AnalyticsBrowser } from '@segment/analytics-next';

import { SEGMENT_WRITE_KEY } from 'env';
import {
  AnalyticsContext,
  Analytics_t,
} from 'components/contexts/Analytics/AnalyticsContext';
import { ChildrenProps_t } from 'types/component';

export interface AnalyticsProviderProps_t extends ChildrenProps_t {}
export const AnalyticsProvider = memo<AnalyticsProviderProps_t>(
  ({ children }) => {
    const analyticsRef = useRef<Analytics_t>(
      AnalyticsBrowser.load({
        writeKey: SEGMENT_WRITE_KEY,
      }),
    );

    return (
      <AnalyticsContext.Provider value={analyticsRef.current}>
        {children}
      </AnalyticsContext.Provider>
    );
  },
);
