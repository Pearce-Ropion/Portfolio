import * as CSS from 'csstype';

interface Weights {
    light: CSS.Property.FontWeight;
    normal: CSS.Property.FontWeight;
    medium: CSS.Property.FontWeight;
    semibold: CSS.Property.FontWeight;
    bold: CSS.Property.FontWeight;
    black: CSS.Property.FontWeight;
}

export const Weights: Weights = {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
};

interface FontFamily {
    sansSerif: CSS.Property.FontFamily;
    serif: CSS.Property.FontFamily;
    monospace: CSS.Property.FontFamily;
}

export const FontFamily: FontFamily = {
    sansSerif: '"Lato", sans-serif',
    serif: '"Merriweather", Georgia, "Times New Roman", Times, serif',
    monospace: '"Inconsolata", monospace',
};

interface FontSize {
    xxsm: CSS.Property.FontSize;
    xsm: CSS.Property.FontSize;
    sm: CSS.Property.FontSize;
    md: CSS.Property.FontSize;
    lg: CSS.Property.FontSize;
    xlg: CSS.Property.FontSize;
}

export const FontSize: FontSize = {
    xxsm: '12px',
    xsm: '14px',
    sm: '16px',
    md: '18px',
    lg: '22px',
    xlg: '32px',
};
