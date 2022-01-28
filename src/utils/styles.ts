import { cx } from '@emotion/css';
import * as CSS from 'csstype';

import { hexToRgb, RGB } from 'utils/color';

export type PixelValue = string | number;

export const toNumber = (value: PixelValue): number => {
    if (typeof value === 'number') {
        return value;
    }

    return parseFloat(value.replace(/\D/g, ''));
};

export const toUnit = (value: PixelValue, unit: string): string => {
    const numeric: number = toNumber(value);

    if (numeric === 0) {
        return '0';
    }

    return numeric.toString().concat(unit);
};

export const toPixels = (value: PixelValue): string => {
    return toUnit(value, 'px');
};

export const toEm = (value: PixelValue): string => {
    return toUnit(value, 'em');
};

export const toRem = (value: PixelValue): string => {
    return toUnit(value, 'rem');
};

export const toPercent = (value: PixelValue): string => {
    return toUnit(value, '%');
};

const spacingShorthand = (
    top: PixelValue,
    right?: PixelValue,
    bottom?: PixelValue,
    left?: PixelValue
): string => {
    const properties: string[] = [top.toString()];

    if (right || right === 0) {
        properties.push(right.toString());
    }

    if (bottom || bottom === 0) {
        properties.push(bottom.toString());
    }

    if (left || left === 0) {
        properties.push(left.toString());
    }

    return properties.join(' ');
};

const spacingShorthandToPx = (
    top: number,
    right?: number,
    bottom?: number,
    left?: number
): string => {
    return spacingShorthand(
        toPixels(top),
        right !== undefined ? toPixels(right) : undefined,
        bottom !== undefined ? toPixels(bottom) : undefined,
        left !== undefined ? toPixels(left) : undefined
    );
};

const spacingShorthandToEm = (
    top: number,
    right?: number,
    bottom?: number,
    left?: number
): string => {
    return spacingShorthand(
        toEm(top),
        right !== undefined ? toEm(right) : undefined,
        bottom !== undefined ? toEm(bottom) : undefined,
        left !== undefined ? toEm(left) : undefined
    );
};

const borderShorthand = (
    width: PixelValue,
    style: CSS.Property.BorderStyle,
    color: CSS.Property.BorderColor
): string => {
    return cx(toPixels(width), style, color);
};

const rgbShorthand = (rgb: RGB, opacity?: CSS.Property.Opacity): string => {
    if (opacity) {
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
    }

    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
};

const hexToRgbShorthand = (
    hex: string,
    opacity?: CSS.Property.Opacity
): string | undefined => {
    const rgb: RGB | undefined = hexToRgb(hex);

    if (rgb) {
        return rgbShorthand(rgb, opacity);
    }
};

export const Shorthand = {
    margin: spacingShorthand,
    marginToPx: spacingShorthandToPx,
    marginToEm: spacingShorthandToEm,

    padding: spacingShorthand,
    paddingToPx: spacingShorthandToPx,
    paddingToEm: spacingShorthandToEm,

    border: borderShorthand,

    rgb: rgbShorthand,
    hexToRgb: hexToRgbShorthand,
};
