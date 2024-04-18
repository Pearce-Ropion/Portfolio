import { IconLookupProps_t, IconVariant_t } from './lookup';
import {
  DuotoneIconDOMProps_t,
  DuotoneIconElement_t,
  DuotoneIconImplProps_t,
} from './duotone';
import {
  StandardIconDOMProps_t,
  StandardIconElement_t,
  StandardIconImplProps_t,
} from './standard';

export type IconElement_t = StandardIconElement_t | DuotoneIconElement_t;

export interface IconDOMProps_t
  extends StandardIconDOMProps_t,
    DuotoneIconDOMProps_t {}

export interface IconImplProps_t
  extends StandardIconImplProps_t,
    DuotoneIconImplProps_t {
  isDuotone?: boolean;
  variant?: IconVariant_t;
}

export interface IconProps_t
  extends IconDOMProps_t,
    IconImplProps_t,
    IconLookupProps_t {}
