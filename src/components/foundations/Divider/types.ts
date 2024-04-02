import {
  CSSProps_t,
  DOMProps_t,
  StandardDOMEvents_t,
  StyleDOMProps_t,
} from 'types/dom';
import { PropertyValue_t } from 'types/stitches';

export type DividerElement_t = HTMLHRElement;
export interface DividerProps_t
  extends DOMProps_t,
    StyleDOMProps_t,
    CSSProps_t,
    StandardDOMEvents_t<DividerElement_t> {
  direction?: 'horizontal' | 'vertical';
  length?: PropertyValue_t<'width' | 'height'>;
  squared?: boolean;
  thickness?: PropertyValue_t<'width' | 'height'>;
}
