import {
  createContext as createReactContext,
  useMemo,
  useContext as useReactContext,
} from 'react';

import type { Children_t } from 'types/dom';

export function createContext<ContextValue_t extends {}>(
  rootComponentName: string,
  defaultContext?: ContextValue_t,
) {
  const Context = createReactContext<ContextValue_t | undefined>(
    defaultContext,
  );

  function Provider(props: ContextValue_t & Children_t) {
    const { children, ...context } = props;

    // Only re-memoize when prop values change
    const value = useMemo(
      () => context,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Object.values(context),
    ) as ContextValue_t;

    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  function useContext() {
    return useReactContext(Context) as ContextValue_t;
  }

  Provider.displayName = `${rootComponentName}Provider`;

  return [Provider, useContext] as const;
}

export interface BaseScopedContext_t {
  __context: boolean;
}

export type ScopedContext_t<T extends {}> = BaseScopedContext_t & T;
export type OmitScopedContext_t<T extends {}> = Omit<T, '__context'>;

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

export function createScopedContext<BaseContext_t extends {}>(
  rootComponentName: string,
  defaultContext?: OmitScopedContext_t<BaseContext_t>,
) {
  type ContextValue_t = ScopedContext_t<BaseContext_t>;

  const Context = createReactContext<ContextValue_t>({
    ...defaultContext,
    __context: false,
  } as ContextValue_t);

  function Provider(props: OmitScopedContext_t<BaseContext_t> & Children_t) {
    const { children, ...context } = props;

    // Only re-memoize when prop values change
    const value = useMemo(
      () => ({
        ...context,
        __context: true,
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Object.values(context),
    ) as ContextValue_t;

    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  function useContext(): ContextValue_t {
    return useReactContext(Context);
  }

  function useRequiredScope(consumerComponentName: string) {
    const { __context } = useContext();
    if (!__context) {
      throw new Error(
        `\`<${consumerComponentName}>\` must be used within \`<${rootComponentName}\`>`,
      );
    }
  }

  Provider.displayName = `${rootComponentName}Provider`;

  return [Provider, useContext, useRequiredScope] as const;
}
