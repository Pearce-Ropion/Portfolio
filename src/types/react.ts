import type { JSXElementConstructor } from 'react';

export type JSXComponent_t =
  | keyof JSX.IntrinsicElements
  | JSXElementConstructor<any>;
