import { CSSProps_t, HTMLAttributes_t } from 'types/dom';

export type FlexElement_t = HTMLDivElement;

export interface FlexDOMProps_t extends HTMLAttributes_t<FlexElement_t> {}
export interface FlexImplProps_t
  extends HTMLAttributes_t<FlexElement_t>,
    CSSProps_t {
  align?: 'start' | 'center' | 'end';
  center?: boolean;
  direction?: 'column' | 'columnReverse' | 'row' | 'rowReverse';
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  grow?: boolean;
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: 'noWrap' | 'wrap';
}

export interface FlexProps_t extends FlexDOMProps_t, FlexImplProps_t {}
