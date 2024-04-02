import { useCallback, useMemo } from 'react';

import type { Optional_t } from 'types/helpers';

type AnyCallback_t = (...args: any[]) => void;
interface ComposedCallbackOptions_t<H extends AnyCallback_t = AnyCallback_t> {
  checkDefaultPrevented?: boolean;
  disabled?: boolean;
  preCallback?: H;
  postCallback?: H;
}

function isFunction<H extends AnyCallback_t>(maybeFn: unknown): maybeFn is H {
  return typeof maybeFn === 'function';
}

function isHookOptions(
  maybeOptions: unknown,
): maybeOptions is ComposedCallbackOptions_t {
  return !!maybeOptions && typeof maybeOptions !== 'function';
}

export function useComposedCallback<H extends AnyCallback_t>(
  ...callbacks: Array<Optional_t<H | ComposedCallbackOptions_t>>
): H {
  const {
    checkDefaultPrevented = true,
    disabled,
    preCallback,
    postCallback,
  } = useMemo(
    () => callbacks.find(isHookOptions) || {},
    // eslint-disable-next-line react-hooks/exhaustive-deps
    callbacks,
  );
  const validCallbacks = useMemo(
    () => callbacks.filter<H>(isFunction),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    callbacks,
  );

  // @ts-ignore - this is a generalized function combiner that TS can't serialize
  return useCallback<H>((...args: Parameters<H>) => {
    if (disabled) {
      return;
    }

    if (preCallback) preCallback(...args);

    for (const callback of validCallbacks) {
      const [maybeEvent] = args;
      if (maybeEvent && maybeEvent instanceof Event) {
        if (checkDefaultPrevented) {
          if (!maybeEvent.defaultPrevented) {
            callback(...args);
          }
        } else {
          callback(...args);
        }
      } else {
        callback(...args);
      }
    }

    if (postCallback) postCallback(...args);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, callbacks);
}
