import type { ComponentProps, VariantProps } from '@stitches/react';
import type {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  NamedExoticComponent,
  ForwardedRef,
  ReactElement,
} from 'react';
import { forwardRef, memo } from 'react';

export type HTMLOrSVGElement_t = HTMLElement | SVGElement;

export type OmitPrimitiveProps_t<P extends {} = {}> = Omit<P, 'asChild'>;
export type OmitPrimitiveComponentProps_t<Component> = OmitPrimitiveProps_t<
  ComponentProps<Component>
>;

export type OmitComponentVariantProps_t<
  Component extends { [key: symbol | string]: any },
> = Omit<ComponentProps<Component>, keyof VariantProps<Component>>;

export type ComponentMeta_t<P extends object = {}, SC = {}> = SC & {
  displayName?: string;
  defaultProps?: Partial<P>;
  toString?: () => string;
};

export interface MemoComponentRenderer_t<P extends object = {}> {
  (props: P): ReactElement | null;
}

export type MemoComponent_t<
  P extends object = {},
  SC = {},
> = NamedExoticComponent<P> & ComponentMeta_t<P, SC>;

export function createMemoComponent<P extends object = {}, SC = {}>(
  renderer: MemoComponentRenderer_t<P>,
): MemoComponent_t<P, SC> {
  return memo<P>(renderer) as MemoComponent_t<P, SC>;
}

export type ForwardRefProps_t<
  T extends HTMLOrSVGElement_t,
  P extends object = {},
> = PropsWithoutRef<P> & RefAttributes<T>;

export interface ComponentRendererWithRef_t<
  T extends HTMLOrSVGElement_t,
  P extends object = {},
> {
  (props: P, ref: ForwardedRef<T>): ReactElement | null;
}

export type ComponentWithRef_t<
  T extends HTMLOrSVGElement_t | unknown,
  P extends object = {},
  SC = {},
> = T extends HTMLOrSVGElement_t
  ? ForwardRefExoticComponent<ForwardRefProps_t<T, P>> & ComponentMeta_t<P, SC>
  : never;

export function createComponentWithRef<
  T extends HTMLOrSVGElement_t,
  P extends object = {},
  SC = {},
>(renderer: ComponentRendererWithRef_t<T, P>): ComponentWithRef_t<T, P, SC> {
  return forwardRef<T, P>(renderer) as ComponentWithRef_t<T, P, SC>;
}
