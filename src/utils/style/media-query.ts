import { Breakpoint } from 'styles/tokens/breakpoint';
import { toPx } from 'utils/style/units';

export const lessThan = (width: number): string =>
  `(max-width: ${toPx(width)})`;

export const greaterThan = (width: number): string =>
  `(min-width: ${toPx(width)})`;

export const between = (minWidth: number, maxWidth: number): string => {
  if (minWidth >= maxWidth) {
    throw new Error('minWidth should be less than maxWidth');
  }

  return `${greaterThan(minWidth)} and ${lessThan(maxWidth)}`;
};

export const MediaQuery = {
  mobile: lessThan(Breakpoint.mobile),
  tabletSmall: lessThan(Breakpoint.tabletSmall),
  onlyTabletSmall: between(Breakpoint.mobile, Breakpoint.tabletSmall),
  tablet: lessThan(Breakpoint.tablet),
  onlyTablet: between(Breakpoint.tabletSmall, Breakpoint.tablet),
  desktop: greaterThan(Breakpoint.tablet),
  desktopMed: greaterThan(Breakpoint.desktop),
  desktopWide: greaterThan(Breakpoint.desktopWide),
} as const;
