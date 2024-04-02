import {
  TypographyDOMProps_t,
  TypographyElement_t,
  TypographyImplProps_t,
} from '../types';

export type CopyElement_t = TypographyElement_t;

export interface CopyDOMProps_t extends TypographyDOMProps_t {}
export interface CopyImplProps_t extends TypographyImplProps_t {
  size?: 'small' | 'medium' | 'large';
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'bold' | 'black';
}

export interface CopyProps_t extends CopyDOMProps_t, CopyImplProps_t {}
