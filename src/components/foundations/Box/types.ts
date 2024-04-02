import { HTMLAttributes_t, CSSProps_t } from 'types/dom';

export type BoxElement_t = HTMLDivElement;

export interface BoxDOMProps_t extends HTMLAttributes_t<BoxElement_t> {}
export interface BoxImplProps_t extends CSSProps_t {
  grow?: boolean;
}
export interface BoxProps_t extends BoxDOMProps_t, BoxImplProps_t {}
