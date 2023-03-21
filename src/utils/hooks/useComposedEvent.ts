import { useCallback } from 'react';

export interface UseComposedEventOptions_t {}
type ComposedEventHandler_t<E> = (event: E) => void;

export const useComposedEvent = <E>(
  ...callbacks: Array<ComposedEventHandler_t<E> | UseComposedEventOptions_t>
): ComposedEventHandler_t<E> => {
  return useCallback(
    (event: E) => {
      for (const callback of callbacks) {
        if (typeof callback === 'function') {
          callback(event);
        }
      }
    },
    [callbacks],
  );
};
