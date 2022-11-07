import type { PropsWithChildren } from 'react';
import { createContext, memo, useContext, useEffect, useState } from 'react';
import type { Analytics as SegmentAnalytics } from '@segment/analytics-next';
import { AnalyticsBrowser } from '@segment/analytics-next';

import { SEGMENT_WRITE_KEY } from 'config';

export interface AnalyticsEvent_t {
  action: string;
  category?: string;
  label?: string;
  [key: string]: unknown;
}

export type Analytics_t = SegmentAnalytics | undefined;

export const AnalyticsContext = createContext<Analytics_t>(undefined);
AnalyticsContext.displayName = 'AnalyticsContext';

export type AnalyticsProviderProps_t = PropsWithChildren<{}>;

export const AnalyticsProvider = memo<AnalyticsProviderProps_t>(
  ({ children }) => {
    const [analytics, setAnalytics] = useState<SegmentAnalytics>();

    useEffect(() => {
      const loadAnalytics = async () => {
        try {
          const [response] = await AnalyticsBrowser.load({
            writeKey: SEGMENT_WRITE_KEY,
          });

          setAnalytics(response);
        } catch (err) {
          console.error(
            "An unexpected error occurred while loading the window's analytics",
            err,
          );

          throw err;
        }
      };

      void loadAnalytics();
    });

    return (
      <AnalyticsContext.Provider value={analytics}>
        {children}
      </AnalyticsContext.Provider>
    );
  },
);

export const useAnalytics = (): Analytics_t => {
  return useContext(AnalyticsContext);
};
