import {
  AriaButtonDOMProps_t,
  AriaButtonElement_t,
  AriaButtonImplProps_t,
} from 'components/aria';

export type ButtonElement_t = AriaButtonElement_t;

export interface ButtonDOMProps_t extends AriaButtonDOMProps_t {}

export interface ButtonImplProps_t extends AriaButtonImplProps_t {
  isCompact?: boolean;
  isFullWidth?: boolean;
  isInverted?: boolean;
  variant?: 'primary' | 'secondary';
}

export interface ButtonProps_t extends ButtonDOMProps_t, ButtonImplProps_t {}
