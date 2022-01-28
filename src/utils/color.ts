const HEX_COLOR_REGEX = new RegExp(
    /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/,
    'i'
);

export interface RGB {
    r: number;
    g: number;
    b: number;
}

// https://stackoverflow.com/questions/5623838/
export const hexToRgb = (hex: string): RGB | undefined => {
    const segments = HEX_COLOR_REGEX.exec(hex);

    if (segments) {
        return {
            r: parseInt(segments[1], 16),
            g: parseInt(segments[2], 16),
            b: parseInt(segments[3], 16),
        };
    }
};
