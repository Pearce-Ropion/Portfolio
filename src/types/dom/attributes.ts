import type { AriaAttributes, DOMAttributes } from 'react';

import type { DOMProps_t } from './dom';
import type { FocusableElement_t } from './element';
import type { StyleDOMProps_t } from './style';

export interface HTMLAttributes_t<T extends FocusableElement_t>
  extends DOMProps_t,
    StyleDOMProps_t,
    AriaAttributes,
    DOMAttributes<T> {}
