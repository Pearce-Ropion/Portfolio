import {
  CSSProps_t,
  Children_t,
  DOMProps_t,
  StandardDOMEvents_t,
  StyleDOMProps_t,
} from 'types/dom';
import { SegmentEvent_t } from 'utils/events';

export type ButtonElement_t = HTMLButtonElement;
export interface ButtonDOMProps_t
  extends DOMProps_t,
    Children_t,
    StyleDOMProps_t,
    CSSProps_t,
    StandardDOMEvents_t<ButtonElement_t> {}

export interface ButtonImplProps_t {
  isCompact?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isInverted?: boolean;
  segment?: SegmentEvent_t;
  variant?: 'primary' | 'secondary';
}

export interface ButtonProps_t extends ButtonDOMProps_t, ButtonImplProps_t {}
