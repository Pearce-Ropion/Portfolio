import { PropertyValue_t } from 'types/stitches';

import {
  StandardIconDOMProps_t,
  StandardIconElement_t,
  StandardIconImplProps_t,
} from './standard';
import { IconLookupProps_t } from './lookup';

export type DuotoneIconElement_t = StandardIconElement_t;

export interface DuotoneIconDOMProps_t extends StandardIconDOMProps_t {}

export interface DuotoneIconImplProps_t extends StandardIconImplProps_t {
  primaryColor?: PropertyValue_t<'color'>;
  secondaryColor?: PropertyValue_t<'color'>;
  primaryOpacity?: PropertyValue_t<'opacity'>;
  secondaryOpacity?: PropertyValue_t<'opacity'>;
}

export interface DuotoneIconProps_t
  extends DuotoneIconDOMProps_t,
    DuotoneIconImplProps_t,
    IconLookupProps_t {}
