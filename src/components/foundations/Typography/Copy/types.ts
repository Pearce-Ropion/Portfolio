import { TypographyElement_t, TypographyProps_t } from '../types';

export type CopyElement_t = TypographyElement_t;
export interface CopyProps_t extends TypographyProps_t {
  size?: 'small' | 'medium' | 'large';
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'bold' | 'black';
}
