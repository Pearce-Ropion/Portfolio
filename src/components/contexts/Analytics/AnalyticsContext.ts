import { createContext } from 'react';
import { AnalyticsBrowser } from '@segment/analytics-next';

export type Analytics_t = AnalyticsBrowser;
export const AnalyticsContext = createContext<Analytics_t | undefined>(
  undefined,
);

AnalyticsContext.displayName = 'AnalyticsContext';
