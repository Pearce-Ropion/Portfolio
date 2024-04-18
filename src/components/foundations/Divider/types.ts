import {
  CSSProps_t,
  DOMProps_t,
  StandardDOMEvents_t,
  StyleDOMProps_t,
} from 'types/dom';
import { PropertyValue_t } from 'types/stitches';

export type DividerElement_t = HTMLHRElement;

export interface DividerDOMProps_t
  extends DOMProps_t,
    StyleDOMProps_t,
    StandardDOMEvents_t<DividerElement_t> {}

export interface DividerImplProps_t extends CSSProps_t {
  direction?: 'horizontal' | 'vertical';
  isInverted?: boolean;
  isSquared?: boolean;
  length?: PropertyValue_t<'width' | 'height'>;
  thickness?: PropertyValue_t<'width' | 'height'>;
}
export interface DividerProps_t extends DividerDOMProps_t, DividerImplProps_t {}
