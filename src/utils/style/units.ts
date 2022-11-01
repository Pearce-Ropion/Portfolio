export type UnknownUnit_t = string | number;

export function toNumber(value?: UnknownUnit_t): number {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    return parseFloat(value.replace(/[^0-9.]/g, ''));
  }

  return Number.NaN;
}

interface ToUnitOptions_t {
  noUnitZero?: boolean;
  unitBeforeValue?: boolean;
}

export function toUnit(
  value: UnknownUnit_t,
  unit: string,
  { noUnitZero = true, unitBeforeValue = false }: ToUnitOptions_t = {},
): string {
  const numericValue = toNumber(value);

  if (noUnitZero && numericValue === 0) {
    return '0';
  }

  if (unitBeforeValue) {
    return unit.concat(numericValue.toString());
  }

  return numericValue.toString().concat(unit);
}

export function toPx(value: UnknownUnit_t): string {
  return toUnit(value, 'px');
}

export function toEm(value: UnknownUnit_t): string {
  return toUnit(value, 'em');
}

export function toRem(value: UnknownUnit_t): string {
  return toUnit(value, 'rem');
}

export function toPercent(value: UnknownUnit_t): string {
  return toUnit(value, '%');
}

export function toVw(value: UnknownUnit_t): string {
  return toUnit(value, 'vw', { noUnitZero: false });
}

export function toVh(value: UnknownUnit_t): string {
  return toUnit(value, 'vh', { noUnitZero: false });
}

export function toMs(value: UnknownUnit_t): string {
  return toUnit(value, 'ms', { noUnitZero: false });
}

export function toToken(value: UnknownUnit_t): string {
  return toUnit(value, '$', { noUnitZero: false, unitBeforeValue: true });
}
