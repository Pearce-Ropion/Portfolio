import { merge } from 'lodash';

import type { CSSObject_t, FalsyCSSObject_t } from 'types/stitches';

export function mergeCSS(
  ...args: Array<CSSObject_t | FalsyCSSObject_t>
): CSSObject_t {
  const styles = args.filter(Boolean);
  return merge({}, ...styles);
}
