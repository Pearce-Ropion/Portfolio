import type { MutableRefObject, Ref } from 'react';
import { useCallback, useRef } from 'react';

type PossibleRef_t<T> = Ref<T> | undefined;

function setRef<T>(ref: PossibleRef_t<T>, value: T) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as MutableRefObject<T>).current = value;
  }
}

export function composeRefs<T>(...refs: Array<PossibleRef_t<T>>) {
  return (node: T) => {
    for (const ref of refs) {
      setRef(ref, node);
    }
  };
}

export function useComposedRefs<T>(...refs: Array<PossibleRef_t<T>>) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(composeRefs(...refs), refs);
}

export function useLocalRef<T>(...refs: Array<PossibleRef_t<T>>) {
  const localRef = useRef<T>(null);
  const composedRefs = useComposedRefs<T>(localRef, ...refs);
  return [localRef, composedRefs] as const;
}
