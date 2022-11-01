import { useCallback, useEffect, useRef } from 'react';
import { throttle } from 'lodash-es';

const SCROLL_THROTTLE_DELAY = 50; // in milliseconds

export const getScrollY = (): number => {
    return (
        window.scrollY ||
        window.pageYOffset ||
        document.body.scrollTop +
            ((document.documentElement && document.documentElement.scrollTop) ||
                0)
    );
};

export const getScrollX = (): number => {
    return (
        window.scrollX ||
        window.pageXOffset ||
        document.body.scrollLeft +
            ((document.documentElement &&
                document.documentElement.scrollLeft) ||
                0)
    );
};

export interface UseScrollOptions {
    initDelay?: number;
    throttleTimeout?: number;
}

export type ScrollFn = () => number;

export type UseScroll = (
    onScroll?: (nextScroll: number, prevScroll: number) => void,
    options?: UseScrollOptions
) => number;

const scrollHookBase = (getScrollPosition: ScrollFn): UseScroll => {
    const useScroll: UseScroll = (
        onScroll,
        { initDelay, throttleTimeout = SCROLL_THROTTLE_DELAY } = {}
    ) => {
        const isMounted = useRef(false);

        const prevScroll = useRef(0);
        const initTimeoutId = useRef<NodeJS.Timeout | null>(null);

        const handleScroll = useCallback(() => {
            const nextScroll = getScrollPosition();

            if (onScroll) {
                onScroll(nextScroll, prevScroll.current);
            }

            prevScroll.current = nextScroll;
        }, [onScroll]);

        // Set the initial scroll state
        useEffect(() => {
            handleScroll();
        }, [handleScroll]);

        useEffect(() => {
            const throttledScroll = throttle(handleScroll, throttleTimeout);

            if (!isMounted.current && initDelay) {
                initTimeoutId.current = setTimeout(() => {
                    window.addEventListener('scroll', throttledScroll);
                }, initDelay);
            } else {
                window.addEventListener('scroll', throttledScroll);
            }

            isMounted.current = true;

            return () => {
                if (initTimeoutId.current) {
                    clearTimeout(initTimeoutId.current);
                }

                throttledScroll.cancel();
                window.removeEventListener('scroll', throttledScroll);
            };
        }, [handleScroll, initDelay, throttleTimeout]);

        return prevScroll.current;
    };

    return useScroll;
};

export const useScrollX: UseScroll = scrollHookBase(getScrollX);
export const useScrollY: UseScroll = scrollHookBase(getScrollY);
