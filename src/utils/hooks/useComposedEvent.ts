import { useCallback } from 'react';

import { Maybe_t } from 'types';

export interface UseComposedEventOptions_t {
  checkDefaultPrevented?: boolean;
}
type ComposedEventHandler_t<E = {}> = (event?: E) => void;
type ComposedEventCallback_t<E> = Maybe_t<
  ComposedEventHandler_t<E> | UseComposedEventOptions_t
>;

export const useComposedEvent = <E>(
  ...callbacks: Array<ComposedEventCallback_t<E>>
): ComposedEventHandler_t<E> => {
  return useCallback((event?: E) => {
    for (const callback of callbacks) {
      if (callback) {
        if (typeof callback === 'function') {
          if (event && event instanceof Event) {
            if (!event.defaultPrevented) {
              callback(event);
            }
          } else {
            callback(event);
          }
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, callbacks);
};
