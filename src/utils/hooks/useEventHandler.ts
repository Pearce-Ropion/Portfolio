import type { ReactEventHandler } from 'react';
import { useCallback } from 'react';

export const useEventHandler = <H extends ReactEventHandler>(
  disabled: boolean | undefined, // not optional but we want to be able to pass undefined
  handlerProp: H | undefined, // not optional but we want to be able to pass undefined
  callback?: H,
): H => {
  return useCallback(
    // @ts-ignore FIXME: Can't create a valid event handler from the generic event handler
    e => {
      if (disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      handlerProp?.(e);
      callback?.(e);
    },
    [disabled, handlerProp, callback],
  );
};
