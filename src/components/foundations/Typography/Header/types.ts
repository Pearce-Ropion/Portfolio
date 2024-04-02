import { TypographyDOMProps_t, TypographyImplProps_t } from '../types';

export type HeaderElement_t = HTMLDivElement;

export interface HeaderDOMProps_t extends TypographyDOMProps_t {}
export interface HeaderImplProps_t extends TypographyImplProps_t {
  isSubheader?: boolean;
}
export interface HeaderProps_t extends HeaderDOMProps_t, HeaderImplProps_t {}
