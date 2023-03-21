import {
  createContext as _createContext,
  useMemo,
  useContext as _useContext,
} from 'react';

import { Maybe_t, Nullable_t } from 'types/helpers';
import { Children_t } from 'utils/component';

/**
 * Adapted from @radix-ui/react-context
 * @see https://github.com/radix-ui/primitives/blob/main/packages/react/context/src/createContext.tsx
 *
 * Creates a context with an optional default value. Returns a tuple containing
 * the provider and a hook to consume the context. Throws an error if the hook
 * is used outside of the provider.
 *
 * The only difference between our version and radix's is that we've made the
 * consumerName argument in the hook optional to make it easier to use in
 * Sigma applications
 */
export function createContext<ContextValueType extends object | null>(
  rootComponentName: string,
  defaultContext?: Nullable_t<ContextValueType>,
) {
  const Context = _createContext<Maybe_t<ContextValueType>>(defaultContext);

  function Provider(props: ContextValueType & Children_t) {
    const { children, ...context } = props;

    // Only re-memoize when prop values change
    const value = useMemo(
      () => context,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Object.values(context),
    ) as ContextValueType;

    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  function useContext(consumerName?: string): ContextValueType {
    const context = _useContext(Context);
    if (context) return context;
    if (defaultContext != null) return defaultContext;

    // if a defaultContext wasn't specified, it's a required context.
    consumerName = consumerName || `use${rootComponentName}Context`;
    throw new Error(
      `\`${consumerName}\` must be used within \`${rootComponentName}\``,
    );
  }

  Provider.displayName = `${rootComponentName}Provider`;

  return [Provider, useContext] as const;
}
