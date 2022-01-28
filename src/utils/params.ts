import { navigate } from 'gatsby';
import { isPlainObject } from 'lodash';

import { isBrowser } from 'utils/is-browser';

export type URLSearchParamsObject = Record<string, string>;

export const getParams = (search: string): URLSearchParamsObject => {
    if (isBrowser) {
        return Object.fromEntries(
            new URLSearchParams(search || window.location.search).entries()
        );
    }

    return {};
};

export const clearParams = async (): Promise<void> => {
    await navigate(window.location.pathname, { replace: true });
};

export const setParams = async (
    params: URLSearchParams | URLSearchParamsObject,
    reset = true
): Promise<void> => {
    const searchParams: URLSearchParams = new URLSearchParams(
        reset ? undefined : window.location.search
    );

    let pairs: [string, string][] = [];
    if (params instanceof URLSearchParams) {
        pairs = [...params.entries()];
    } else if (isPlainObject(params)) {
        pairs = Object.entries(params);
    }

    pairs.forEach(([key, value]) => {
        if (searchParams.has(key)) {
            searchParams.append(key, value);
        } else {
            searchParams.set(key, value);
        }
    });

    const searchParamsStr: string = searchParams.toString();

    if (searchParamsStr) {
        await navigate(`?${searchParamsStr}`, { replace: true });
    } else if (reset) {
        await clearParams();
    }
};
