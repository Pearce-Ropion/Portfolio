import {
  FlipProp,
  IconProp,
  PullProp,
  RotateProp,
  SizeProp,
  Transform,
} from '@fortawesome/fontawesome-svg-core';

import {
  DOMProps_t,
  SVGDOMProps_t,
  StandardDOMEvents_t,
  StyleDOMProps_t,
} from 'types/dom';

export type FontAwesomeIconAnimation_t =
  | 'beat'
  | 'beat-fade'
  | 'bounce'
  | 'fade'
  | 'pulse'
  | 'shake'
  | 'spin'
  | 'spin-pulse'
  | 'spin-reverse';

export type FontAwesomeIconElement_t = SVGSVGElement;

export interface FontAwesomeIconDOMProps_t
  extends DOMProps_t,
    SVGDOMProps_t,
    StyleDOMProps_t,
    StandardDOMEvents_t<FontAwesomeIconElement_t> {}

export interface FontAwesomeIconImplProps_t {
  animation?: FontAwesomeIconAnimation_t | FontAwesomeIconAnimation_t[];
  // color?: string;
  flipped?: FlipProp;
  hasBorder?: boolean;
  isFixedWidth?: boolean;
  isInverted?: boolean;
  isListItem?: boolean;
  label?: string;
  // opacity?: number;
  pullDirection?: PullProp;
  rotation?: RotateProp;
  size?: SizeProp;
  swapOpacity?: boolean;
  transform?: string | Transform;
}

export interface FontAwesomeIconProps_t
  extends FontAwesomeIconDOMProps_t,
    FontAwesomeIconImplProps_t {
  icon: IconProp;
}
