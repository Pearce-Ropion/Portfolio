import { TypographyElement_t, TypographyProps_t } from '../types';

export type MonoElement_t = TypographyElement_t;
export interface MonoProps_t extends TypographyProps_t {
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
