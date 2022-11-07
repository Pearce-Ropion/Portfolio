import { merge } from 'lodash';
import { CSSProperties } from 'react';

import type { CSSObject_t, FalsyCSSObject_t } from 'types/stitches';

export const mergeCSS = (
  ...args: Array<CSSObject_t | FalsyCSSObject_t>
): CSSObject_t => {
  const styles = args.filter(Boolean);
  return merge({}, ...styles);
};

export const mergeStyle = (
  ...args: Array<CSSProperties | FalsyCSSObject_t>
): CSSProperties => {
  const styles = args.filter(Boolean);
  return merge({}, ...styles);
};
