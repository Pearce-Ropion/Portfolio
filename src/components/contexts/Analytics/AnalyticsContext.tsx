import { AnalyticsBrowser } from '@segment/analytics-next';
import { ComponentProps, useRef } from 'react';

import { createContext } from 'utils/context';
import { SEGMENT_WRITE_KEY } from 'env';
import { createMemoComponent } from 'utils/component';

export interface AnalyticsContext_t {
  analytics?: AnalyticsBrowser;
}

export const [AnalyticsContextProvider, useAnalytics] =
  createContext<AnalyticsContext_t>('Analytics');

export const AnalyticsProvider = createMemoComponent<
  ComponentProps<typeof AnalyticsContextProvider>
>(({ children }) => {
  const analyticsRef = useRef<AnalyticsBrowser>(
    AnalyticsBrowser.load({
      writeKey: SEGMENT_WRITE_KEY,
    }),
  );

  return (
    <AnalyticsContextProvider analytics={analyticsRef.current}>
      {children}
    </AnalyticsContextProvider>
  );
});
