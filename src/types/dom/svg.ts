import type { SVGAttributes } from 'react';

export interface SVGDOMProps_t<T = SVGSVGElement>
  extends Pick<SVGAttributes<T>, 'height' | 'width' | 'x' | 'y'> {}
