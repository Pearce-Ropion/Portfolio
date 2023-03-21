import type { ComponentProps, VariantProps } from '@stitches/react';
import { kebabCase } from 'lodash-es';
import type {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  NamedExoticComponent,
  ReactNode,
  ForwardedRef,
  ReactElement,
} from 'react';
import { forwardRef, memo } from 'react';

import { PropsWithCSS_t } from 'types/stitches';

export type HTMLOrSVGElement_t = HTMLElement | SVGElement;

export interface Children_t {
  children?: ReactNode;
}

export type OmitPrimitiveProps_t<P extends {} = {}> = Omit<P, 'asChild'>;
export type OmitPrimitiveComponentProps_t<Component> = OmitPrimitiveProps_t<
  ComponentProps<Component>
>;

export type OmitComponentVariantProps_t<
  Component extends { [key: symbol | string]: any },
> = Omit<ComponentProps<Component>, keyof VariantProps<Component>>;

export type ComponentMeta_t<P extends object = {}, SC = {}> = SC & {
  displayName?: string;
  defaultProps?: Partial<PropsWithCSS_t<P>>;
  toString?: () => string;
};

export interface MemoComponentRenderer_t<P extends object = {}> {
  (props: PropsWithCSS_t<P>): ReactElement | null;
}

export type MemoComponent_t<
  P extends object = {},
  SC = {},
> = NamedExoticComponent<PropsWithCSS_t<P>> & ComponentMeta_t<P, SC>;

export function createMemoComponent<P extends object = {}, SC = {}>(
  renderer: MemoComponentRenderer_t<P>,
  displayName?: string,
): MemoComponent_t<P, SC> {
  const Component = memo<P>(renderer) as MemoComponent_t<P, SC>;

  if (displayName) {
    Component.displayName = displayName;
    Component.toString = () => `.${kebabCase(displayName)}`;
  }

  return Component;
}

export type ForwardRefProps_t<
  T extends HTMLOrSVGElement_t,
  P extends object = {},
> = PropsWithoutRef<PropsWithCSS_t<P>> & RefAttributes<T>;

export interface ComponentRendererWithRef_t<
  T extends HTMLOrSVGElement_t,
  P extends object = {},
> {
  (props: PropsWithCSS_t<P>, ref: ForwardedRef<T>): ReactElement | null;
}

export type ComponentWithRef_t<
  T extends HTMLOrSVGElement_t,
  P extends object = {},
  SC = {},
> = ForwardRefExoticComponent<ForwardRefProps_t<T, P>> & ComponentMeta_t<P, SC>;

export function createComponentWithRef<
  T extends HTMLOrSVGElement_t,
  P extends object = {},
  SC = {},
>(
  renderer: ComponentRendererWithRef_t<T, P>,
  displayName?: string,
): ComponentWithRef_t<T, P, SC> {
  const Component = forwardRef<T, PropsWithCSS_t<P>>(
    renderer,
  ) as ComponentWithRef_t<T, P, SC>;

  if (displayName) {
    Component.displayName = displayName;
    Component.toString = () => `.${kebabCase(displayName)}`;
  }

  return Component;
}
