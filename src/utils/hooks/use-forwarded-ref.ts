import { MutableRefObject, Ref, useEffect, useRef } from 'react';

export const useForwardedRef = <T>(
    forwardedRef: Ref<T>
): MutableRefObject<T> => {
    const innerRef = useRef<T>(null);

    useEffect(() => {
        if (!forwardedRef) {
            return;
        }

        if (typeof forwardedRef === 'function') {
            forwardedRef(innerRef.current);
        } else if ('current' in forwardedRef) {
            (forwardedRef as MutableRefObject<T | null>).current =
                innerRef.current;
        }
    });

    return innerRef as MutableRefObject<T>;
};
