import { CSSProps_t, HTMLAttributes_t } from 'types/dom';

export type TypographyElement_t = HTMLDivElement;

export interface TypographyDOMProps_t
  extends HTMLAttributes_t<TypographyElement_t> {}

export interface TypographyImplProps_t extends CSSProps_t {
  align?: 'left' | 'center' | 'right';
  grow?: boolean;
  inline?: boolean;
  inverted?: boolean;
  italic?: boolean;
  noWrap?: boolean;
  truncate?: boolean;
}

export interface TypographyProps_t
  extends TypographyDOMProps_t,
    TypographyImplProps_t {}
