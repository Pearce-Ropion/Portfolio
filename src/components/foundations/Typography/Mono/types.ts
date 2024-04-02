import {
  TypographyDOMProps_t,
  TypographyElement_t,
  TypographyImplProps_t,
} from '../types';

export type MonoElement_t = TypographyElement_t;

export interface MonoDOMProps_t extends TypographyDOMProps_t {}
export interface MonoImplProps_t extends TypographyImplProps_t {
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
export interface MonoProps_t extends MonoDOMProps_t, MonoImplProps_t {}
