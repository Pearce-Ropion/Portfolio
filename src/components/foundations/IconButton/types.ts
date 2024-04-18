import { ReactNode } from 'react';

import {
  AriaButtonDOMProps_t,
  AriaButtonElement_t,
  AriaButtonImplProps_t,
} from 'components/aria';
import { IconLookupProps_t } from 'components/foundations/Icon/types';

export type IconButtonElement_t = AriaButtonElement_t;

export interface IconButtonDOMProps_t extends AriaButtonDOMProps_t {}

export interface IconButtonImplProps_t extends AriaButtonImplProps_t {
  isDropdown?: boolean;
  isInverted?: boolean;
  isLoading?: boolean;
  isPadded?: boolean;
  label: string;
  tooltip?: ReactNode | boolean;
}

export interface IconButtonProps_t
  extends IconButtonDOMProps_t,
    IconButtonImplProps_t,
    IconLookupProps_t {}
