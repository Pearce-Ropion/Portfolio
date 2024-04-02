import type { CSSProperties } from 'react';
import { useMemo } from 'react';
import { head, merge } from 'lodash';

import type { Falsy_t } from 'types/helpers';
import type { CSSObject_t } from 'types/stitches';

type CSSArg_t<T = CSSObject_t> = T | Falsy_t;
type UseCSSArg_t<T = CSSObject_t> = CSSArg_t<T> | unknown[];

function isCSSObjectArg<T = CSSObject_t>(arg: UseCSSArg_t<T>): arg is T {
  return Boolean(arg && !Array.isArray(arg));
}

function isDependencyListArg<T = CSSObject_t>(
  arg: UseCSSArg_t<T>,
): arg is unknown[] {
  return Boolean(arg && Array.isArray(arg));
}

export function mergeCSS(...args: CSSArg_t[]): CSSObject_t {
  const styles = args.filter(Boolean);
  return merge({}, ...styles);
}

export function mergeStyle(
  ...args: Array<CSSArg_t<CSSProperties>>
): CSSProperties {
  const styles = args.filter(Boolean);
  return merge({}, ...styles);
}

export function useMergeCSS(...args: UseCSSArg_t[]) {
  const cssObjectArgs = args.filter<CSSObject_t>(isCSSObjectArg);
  const dependencyList = head(
    args.slice(-1).filter<unknown[]>(isDependencyListArg),
  );

  return useMemo(
    () => mergeCSS(...cssObjectArgs),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencyList || cssObjectArgs,
  );
}

export function useMergeStyle(...args: Array<UseCSSArg_t<CSSProperties>>) {
  const cssObjectArgs = args.filter<CSSProperties>(isCSSObjectArg);
  const dependencyList = head(
    args.slice(-1).filter<unknown[]>(isDependencyListArg),
  );

  return useMemo(
    () => mergeStyle(...cssObjectArgs),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencyList || cssObjectArgs,
  );
}
