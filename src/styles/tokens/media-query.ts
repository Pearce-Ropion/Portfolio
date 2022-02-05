import { CSSObject } from '@emotion/react';

import { BaseViewportState } from 'state/viewport';

import { Breakpoints } from 'styles/tokens/breakpoints';

export type MediaQuery = {
    [key in keyof BaseViewportState]: string;
};

export type MediaQuerySelectors = {
    [key in keyof BaseViewportState]: (styles: CSSObject) => CSSObject;
};

export const MediaQueries: MediaQuery = {
    isMobileSmall: `@media (max-width: ${Breakpoints.mobileSmall})`,
    isMobile: `@media (max-width: ${Breakpoints.mobile})`,
    isOnlyMobile: `@media (min-width: ${Breakpoints.mobileSmall}) and (max-width: ${Breakpoints.mobile})`,
    isTabletSmall: `@media (max-width: ${Breakpoints.tabletSmall})`,
    isOnlyTabletSmall: `@media (min-width: ${Breakpoints.mobile}) and (max-width: ${Breakpoints.tabletSmall})`,
    isTablet: `@media (max-width: ${Breakpoints.tablet})`,
    isOnlyTablet: `@media (min-width: ${Breakpoints.tabletSmall}) and (max-width: ${Breakpoints.tablet})`,
    isTabletLarge: `@media (max-width: ${Breakpoints.tabletLarge})`,
    isOnlyTabletLarge: `@media (min-width: ${Breakpoints.tablet}) and (max-width: ${Breakpoints.tabletLarge})`,
    isDesktop: `@media (min-width: ${Breakpoints.tabletLarge})`,
    isDesktopWide: `@media (min-width: ${Breakpoints.desktopWide})`,
};

export const MQ: MediaQuerySelectors = Object.entries(
    MediaQueries
).reduce<MediaQuerySelectors>((acc, [state, mq]) => {
    acc[state as keyof BaseViewportState] = (styles: CSSObject): CSSObject => ({
        [mq]: {
            ...styles,
        },
    });

    return acc;
}, {} as MediaQuerySelectors);
