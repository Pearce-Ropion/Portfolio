import { HTMLAttributes_t, CSSProps_t } from 'types/dom';

export type BoxElement_t = HTMLDivElement;
export interface BoxProps_t extends HTMLAttributes_t<BoxElement_t>, CSSProps_t {
  grow?: boolean;
}
