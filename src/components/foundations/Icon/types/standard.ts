import { IconLookupProps_t } from 'components/foundations/Icon/types/lookup';
import { PropertyValue_t } from 'types/stitches';

import {
  FontAwesomeIconDOMProps_t,
  FontAwesomeIconElement_t,
  FontAwesomeIconImplProps_t,
} from './fa';

export type StandardIconElement_t = FontAwesomeIconElement_t;

export interface StandardIconDOMProps_t extends FontAwesomeIconDOMProps_t {}

export interface StandardIconImplProps_t extends FontAwesomeIconImplProps_t {
  color?: PropertyValue_t<'color'>;
  opacity?: PropertyValue_t<'color'>;
}

export interface StandardIconProps_t
  extends StandardIconDOMProps_t,
    StandardIconImplProps_t,
    IconLookupProps_t {}
