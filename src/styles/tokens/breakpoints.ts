import { mapValues } from 'lodash-es';

export const Breakpoints: Record<string, number> = {
    mobileSmall: 380,
    mobile: 550,
    tabletSmall: 768,
    tablet: 860,
    tabletLarge: 960,
    desktopWide: 1920,
};

export const BreakpointsPixels: Record<string, string> = mapValues(
    Breakpoints,
    (breakpoint: number): string => {
        return `${breakpoint}px`;
    }
);
