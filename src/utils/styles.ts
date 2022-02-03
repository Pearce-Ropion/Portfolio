import { CSSInterpolation, cx } from '@emotion/css';
import { CSSObject, Theme } from '@emotion/react';
import * as CSS from 'csstype';

import { BaseThemeState } from 'state/theme';

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

export const isThemeOverride = <S extends Partial<Theme>>(
    theme: Theme,
    componentState: S,
    sliceKey: keyof Theme
): boolean => {
    return Boolean(theme[sliceKey] || componentState[sliceKey]);
};

export const isInverted = <S extends Partial<Theme>>(
    theme: Theme,
    componentState: S
): boolean => {
    return isThemeOverride(theme, componentState, 'inverted');
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
    width: string,
    style: CSS.Property.BorderStyle,
    color: CSS.Property.BorderColor
): string => {
    return cx(width, style, color);
};

const borderShorthandToPx = (
    width: PixelValue,
    style: CSS.Property.BorderStyle,
    color: CSS.Property.BorderColor
): string => {
    return borderShorthand(toPixels(width), style, color);
};

const borderShorthandToEm = (
    width: PixelValue,
    style: CSS.Property.BorderStyle,
    color: CSS.Property.BorderColor
): string => {
    return borderShorthand(toEm(width), style, color);
};

const rgbShorthand = (
    r: RGB['r'],
    g: RGB['g'],
    b: RGB['b'],
    opacity?: CSS.Property.Opacity
) => {
    if (opacity) {
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    return `rgb(${r}, ${g}, ${b})`;
};

const rgbObjectShorthand = (
    rgb: RGB,
    opacity?: CSS.Property.Opacity
): string => {
    return rgbShorthand(rgb.r, rgb.g, rgb.b, opacity);
};

const hexToRgbShorthand = (
    hex: string,
    opacity?: CSS.Property.Opacity
): string => {
    const rgb: RGB | undefined = hexToRgb(hex);

    if (rgb) {
        return rgbObjectShorthand(rgb, opacity);
    }

    return rgbShorthand(0, 0, 0);
};

interface TranslateShorthandOptions {
    x?: boolean;
    y?: boolean;
}

const translateShorthand =
    ({ x, y }: TranslateShorthandOptions = {}) =>
    (translateValueXOrY: string, translateValueY?: string): string => {
        if (x && !y) {
            return `translateX(${translateValueXOrY})`;
        } else if (y && !x) {
            return `translateY(${translateValueXOrY})`;
        }

        if (translateValueY) {
            return `translate(${translateValueXOrY}, ${translateValueY})`;
        }

        return `translate(${translateValueXOrY})`;
    };

const translateShorthandToPx =
    (XYOptions?: TranslateShorthandOptions) =>
    (translateValueXOrY: PixelValue, translateValueY?: PixelValue): string => {
        return translateShorthand(XYOptions)(
            toPixels(translateValueXOrY),
            translateValueY ? toPixels(translateValueY) : undefined
        );
    };

const translateShorthandToEm =
    (XYOptions?: TranslateShorthandOptions) =>
    (translateValueXOrY: PixelValue, translateValueY?: PixelValue): string => {
        return translateShorthand(XYOptions)(
            toEm(translateValueXOrY),
            translateValueY ? toEm(translateValueY) : undefined
        );
    };

const scaleShorthand = (scaleValue: PixelValue) => `scale(${scaleValue})`;

export const Shorthand = {
    margin: spacingShorthand,
    marginToPx: spacingShorthandToPx,
    marginToEm: spacingShorthandToEm,

    padding: spacingShorthand,
    paddingToPx: spacingShorthandToPx,
    paddingToEm: spacingShorthandToEm,

    border: borderShorthand,
    borderToPx: borderShorthandToPx,
    borderToEm: borderShorthandToEm,

    rgbObject: rgbObjectShorthand,
    hexToRgb: hexToRgbShorthand,

    translate: translateShorthand(),
    translateToPx: translateShorthandToPx(),
    translateToEm: translateShorthandToEm(),

    translateX: translateShorthand({ x: true }),
    translateXToPx: translateShorthandToPx({ x: true }),
    translateXToEm: translateShorthandToEm({ x: true }),

    translateY: translateShorthand({ y: true }),
    translateYToPx: translateShorthandToPx({ y: true }),
    translateYToEm: translateShorthandToEm({ y: true }),

    scale: scaleShorthand,
};
