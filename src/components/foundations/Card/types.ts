import {
  AriaLabelingProps_t,
  CSSProps_t,
  Children_t,
  DOMProps_t,
  StandardDOMEvents_t,
  StyleDOMProps_t,
} from 'types/dom';

export type CardElement_t = HTMLDivElement;

export interface CardDOMProps_t
  extends DOMProps_t,
    Children_t,
    AriaLabelingProps_t,
    StyleDOMProps_t,
    StandardDOMEvents_t<CardElement_t> {}

export interface CardImplProps_t extends CSSProps_t {
  isBordered?: boolean;
  isInverted?: boolean;
  isPadded?: boolean;
}

export interface CardProps_t extends CardDOMProps_t, CardImplProps_t {}
