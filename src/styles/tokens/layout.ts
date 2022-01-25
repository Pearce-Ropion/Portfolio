import * as CSS from 'csstype';

export type SpacingMultiplier = number;

export const THEME_SPACING = 8;

export interface SpacingOptions {
    base?: number;
    em?: boolean;
    rem?: boolean;
}

export const spacing = (
    multiplier: SpacingMultiplier,
    options: SpacingOptions = {}
): string => {
    const base: number =
        options.base !== undefined ? options.base : THEME_SPACING;

    if (options.em || options.rem) {
        const em: number = multiplier / (16 / base);
        return `${em}`.concat(options.rem ? 'rem' : 'em');
    }

    return `${base * multiplier}px`;
};

interface BorderRadius {
    small: CSS.Property.BorderRadius;
    medium: CSS.Property.BorderRadius;
    large: CSS.Property.BorderRadius;
}

export const BorderRadius: BorderRadius = {
    small: spacing(0.5),
    medium: spacing(1),
    large: spacing(1.5),
};

interface ZIndex {
    negative: CSS.Property.ZIndex;
    positive: CSS.Property.ZIndex;
    dropdown: CSS.Property.ZIndex;
    navbar: CSS.Property.ZIndex;
    portal: CSS.Property.ZIndex;
}

export const ZIndex: ZIndex = {
    negative: -100,
    positive: 100,
    dropdown: 800,
    navbar: 1000,
    portal: 4000,
};
