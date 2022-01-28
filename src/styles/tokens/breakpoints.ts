import { toPixels } from 'utils/styles';

export enum Breakpoints {
    mobileSmall = 380,
    mobile = 550,
    tabletSmall = 768,
    tablet = 860,
    tabletLarge = 960,
    desktopWide = 1920,
}

export const BreakpointsPixels: Record<string, string> = Object.entries(
    Breakpoints
).reduce<Record<string, string>>((acc, [name, value]) => {
    acc[name] = toPixels(value);
    return acc;
}, {});
