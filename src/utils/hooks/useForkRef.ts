import type { MutableRefObject, Ref, RefCallback, RefObject } from 'react';
import { useMemo, useRef } from 'react';

export function setRef<T>(
  ref:
    | MutableRefObject<T | null>
    | ((instance: T | null) => void)
    | null
    | undefined,
  value: T | null,
): void {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

export function useForkRef<T>(
  ...refs: Array<Ref<T> | undefined>
): RefCallback<T> | null {
  return useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }

    return instance => {
      for (const ref of refs) {
        if (ref) setRef<T>(ref, instance);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

export function useInternalRef<T>(
  ref?: Ref<T>,
): [RefObject<T>, RefCallback<T> | null] {
  const internalRef = useRef<T>(null);
  const forkRef = useForkRef(ref, internalRef);

  return [internalRef, forkRef];
}
