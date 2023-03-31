import { ElementRef } from 'react';

import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { StyledMono } from 'components/foundations/Typography/Mono/styles';

export type MonoElement_t = ElementRef<typeof StyledMono>;
export interface MonoProps_t
  extends OmitComponentVariantProps_t<typeof StyledMono> {
  weight?:
    | 'extraLight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semiBold'
    | 'bold'
    | 'extraBold'
    | 'black';
}

interface MonoComponents_t {
  Styled: typeof StyledMono;
}

export const Mono = createComponentWithRef<
  MonoElement_t,
  MonoProps_t,
  MonoComponents_t
>((props, forwardedRef) => {
  return <StyledMono ref={forwardedRef} {...props} />;
});

Mono.Styled = StyledMono;
