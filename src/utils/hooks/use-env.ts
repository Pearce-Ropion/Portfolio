import { useLocation, WindowLocation } from '@reach/router';

import { BASE_URL } from 'config';

export enum Env {
    DEVELOPMENT = 'development',
    STAGING = 'staging',
    PRODUCTION = 'production',
}

export const useEnv = (): string => {
    const { hostname }: WindowLocation = useLocation();

    if (hostname === 'localhost') {
        return Env.DEVELOPMENT;
    } else if (hostname === `staging.${BASE_URL}`) {
        return Env.STAGING;
    }

    return Env.PRODUCTION;
};
