import { createContext, FC, useContext, useEffect, useState } from 'react';
import {
    Analytics as SegmentAnalytics,
    AnalyticsBrowser,
} from '@segment/analytics-next';

import { SEGMENT_WRITE_KEY } from 'config';

export interface AnalyticsEvent {
    action: string;
    category?: string;
    label?: string;
    [key: string]: unknown;
}

export type Analytics = SegmentAnalytics | undefined;

export const AnalyticsContext = createContext<Analytics>(undefined);

export const AnalyticsProvider: FC = ({ children }) => {
    const [analytics, setAnalytics] = useState<Analytics>();

    useEffect(() => {
        const loadAnalytics = async (): Promise<void> => {
            try {
                const [response] = await AnalyticsBrowser.load({
                    writeKey: SEGMENT_WRITE_KEY,
                });

                setAnalytics(response);
            } catch (err) {
                console.log(
                    "An unexpected error occurred while loading the window's analytics",
                    err
                );

                throw err;
            }
        };

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        loadAnalytics();
    });

    return (
        <AnalyticsContext.Provider value={analytics}>
            {children}
        </AnalyticsContext.Provider>
    );
};

export const useAnalytics = (): Analytics => {
    return useContext(AnalyticsContext);
};
