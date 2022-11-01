import { colord } from 'colord';

export function hexToRgb(hex: string, alpha?: number): string {
  return colord(hex)
    .alpha(alpha ?? 1)
    .toRgbString();
}
