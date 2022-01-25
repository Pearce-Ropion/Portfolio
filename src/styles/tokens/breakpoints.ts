import { mapValues } from 'lodash-es';

interface Breakpoints {
    mobileSmall: number;
    mobile: number;
    tabletSmall: number;
    tablet: number;
    tabletLarge: number;
    desktopWide: number;
}

export const Breakpoints: Breakpoints = {
    mobileSmall: 380,
    mobile: 550,
    tabletSmall: 768,
    tablet: 860,
    tabletLarge: 960,
    desktopWide: 1920,
};

type BreakpointsPixels = {
    [key in keyof Breakpoints]: string;
};

export const BreakpointsPixels: BreakpointsPixels = mapValues(
    Breakpoints,
    (breakpoint: number): string => {
        return `${breakpoint}px`;
    }
);
