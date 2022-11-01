import { Scale_t } from 'styles/tokens/scale/types';
import { toPx } from 'utils/style/units';

export function getScaleValue(multiplier: number): number {
  const sign = multiplier < 0 ? -1 : 1;
  const absoluteMultiplier = Math.abs(multiplier);

  if (!multiplier) {
    return 0;
  }

  if (absoluteMultiplier <= 6) {
    return 4 * absoluteMultiplier * sign;
  }

  if (absoluteMultiplier <= 12) {
    return 8 * (absoluteMultiplier - 3) * sign;
  }

  return 16 * (absoluteMultiplier - 7) * sign;
}

export function getScale(maxMuliplier: number): Scale_t {
  let multiplier = 0;
  const scale = {} as Scale_t;

  let currentValue;
  while ((currentValue = getScaleValue(multiplier)) <= maxMuliplier) {
    const key = multiplier.toString() as keyof Scale_t;
    scale[key] = toPx(currentValue);

    if (multiplier !== 0) {
      const negativeKey = `-${multiplier}` as keyof Scale_t;
      scale[negativeKey] = toPx(currentValue * -1);
    }

    multiplier++;
  }

  return scale;
}

const scale = getScale(128);
export const Scale = {
  ...scale,
  padding: scale[6], // default component padding
  margin: scale[4], // default compoennt margin

  large: scale[6],
  medium: scale[4],
  small: scale[2],
  xSmall: scale[1],
} as const;
