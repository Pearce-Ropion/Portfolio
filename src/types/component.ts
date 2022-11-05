import type {
  NamedExoticComponent,
  MemoExoticComponent,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export type ForwardRefProps_t<E extends Element, P = {}> = PropsWithoutRef<P> &
  RefAttributes<E>;

export type ComponentMeta_t<P = {}, SubComponents = {}> = SubComponents & {
  displayName?: string;
  defaultProps?: Partial<P>;
};

export type MemoComponent_t<
  P = {},
  SubComponents = {},
> = NamedExoticComponent<P> & ComponentMeta_t<P, SubComponents>;

export type MemoForwardRefComponent_t<
  E extends Element,
  P = {},
  SubComponents = {},
> = MemoExoticComponent<ForwardRefExoticComponent<ForwardRefProps_t<E, P>>> &
  ComponentMeta_t<ForwardRefProps_t<E, P>, SubComponents>;