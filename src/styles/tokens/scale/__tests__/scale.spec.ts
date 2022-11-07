import type { Scale_t } from 'styles/tokens/scale/types';
import { getScaleValue, getScale, Scale } from 'styles/tokens/scale/scale';

describe('getScaleValue', () => {
  it('gets the spacing value from a multiplier', () => {
    expect(getScaleValue(0)).toBe(0);
    expect(getScaleValue(1)).toBe(4);
    expect(getScaleValue(-1)).toBe(-4);
    expect(getScaleValue(6)).toBe(24);
    expect(getScaleValue(-6)).toBe(-24);
    expect(getScaleValue(7)).toBe(32);
    expect(getScaleValue(-7)).toBe(-32);
    expect(getScaleValue(8)).toBe(40);
    expect(getScaleValue(-8)).toBe(-40);
    expect(getScaleValue(12)).toBe(72);
    expect(getScaleValue(-12)).toBe(-72);
    expect(getScaleValue(13)).toBe(96);
    expect(getScaleValue(-13)).toBe(-96);
    expect(getScaleValue(15)).toBe(128);
    expect(getScaleValue(-15)).toBe(-128);
    expect(getScaleValue(39)).toBe(512);
    expect(getScaleValue(-39)).toBe(-512);
  });
});

describe('getScale', () => {
  it('generates spacing values up to a maxiumum value', () => {
    const maxSpacingValue = 128;
    const spacingScale: Scale_t = getScale(maxSpacingValue);

    expect(spacingScale[15]).toBe(`${maxSpacingValue}px`);
    expect(spacingScale[-15]).toBe(`-${maxSpacingValue}px`);

    // @ts-ignore - `spacingScale[16]` doesn't exist on Scale_t
    expect(spacingScale[16]).toBeUndefined();
  });

  it('generates the spacing scale', () => {
    expect(Scale).toMatchSnapshot();
  });
});
