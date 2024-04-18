import { AriaButtonProps } from '@react-aria/button';

import { CSSProps_t, Children_t, DOMProps_t, StyleDOMProps_t } from 'types/dom';
import { SegmentEventProps_t } from 'utils/events';

export type AriaButtonElement_t = HTMLButtonElement;
export interface AriaButtonDOMProps_t
  extends DOMProps_t,
    Children_t,
    StyleDOMProps_t,
    CSSProps_t {}

export interface AriaButtonImplProps_t
  extends AriaButtonProps,
    SegmentEventProps_t {}

export interface AriaButtonProps_t
  extends AriaButtonDOMProps_t,
    AriaButtonImplProps_t {}
