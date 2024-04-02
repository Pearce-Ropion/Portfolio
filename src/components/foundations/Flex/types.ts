import { CSSProps_t, HTMLAttributes_t } from 'types/dom';

export type FlexElement_t = HTMLDivElement;
export interface FlexProps_t
  extends HTMLAttributes_t<FlexElement_t>,
    CSSProps_t {
  center?: boolean;
  direction?: 'row' | 'column';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  grow?: boolean;
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: 'noWrap' | 'wrap';
}
