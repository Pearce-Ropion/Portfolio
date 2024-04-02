import { createComponentWithRef } from 'utils/component';

import { StyledMono } from './styles';
import { MonoElement_t, MonoProps_t } from './types';

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
