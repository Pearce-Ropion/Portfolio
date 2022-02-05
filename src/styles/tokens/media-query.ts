import { BaseViewportState } from 'state/viewport';

import { toPixels } from 'utils/styles';

import { Breakpoints } from 'styles/tokens/breakpoints';

export type MediaQuery = {
    [key in keyof BaseViewportState]: string;
};

export const lessThan = (width: number): string =>
    `@media (max-width: ${toPixels(width)})`;

export const greaterThan = (width: number): string =>
    `@media (min-width: ${toPixels(width)})`;

export const between = (minWidth: number, maxWidth: number): string => {
    const minWidthPx: string = toPixels(minWidth);
    const maxWidthPx: string = toPixels(maxWidth);

    return `@media (min-width: ${minWidthPx}) and (max-width: ${maxWidthPx})`;
};

export const MQ: MediaQuery = {
    isMobileSmall: lessThan(Breakpoints.mobileSmall),
    isMobile: lessThan(Breakpoints.mobile),
    isOnlyMobile: between(Breakpoints.mobileSmall, Breakpoints.mobile),
    isTabletSmall: lessThan(Breakpoints.tabletSmall),
    isOnlyTabletSmall: between(Breakpoints.mobile, Breakpoints.tabletSmall),
    isTablet: lessThan(Breakpoints.tablet),
    isOnlyTablet: between(Breakpoints.tabletSmall, Breakpoints.tablet),
    isTabletLarge: lessThan(Breakpoints.tabletLarge),
    isOnlyTabletLarge: between(Breakpoints.tablet, Breakpoints.tabletLarge),
    isDesktop: greaterThan(Breakpoints.tabletLarge),
    isDesktopWide: greaterThan(Breakpoints.desktopWide),
};
