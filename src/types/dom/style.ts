import { CSSProperties } from 'react';

import { CSSObject_t } from 'types/stitches';

export interface CSSProps_t {
  css?: CSSObject_t;
}

export interface StyleDOMProps_t {
  className?: string;
  style?: CSSProperties;
  tabIndex?: number;
}
