import { Breakpoint } from 'styles/tokens/breakpoint';
import { toPx } from 'utils/style/units';

export const lessThan = (width: number): string =>
  `@media (max-width: ${toPx(width)})`;

export const greaterThan = (width: number): string =>
  `@media (min-width: ${toPx(width)})`;

export const between = (minWidth: number, maxWidth: number): string => {
  if (minWidth >= maxWidth) {
    throw new Error('minWidth should be less than maxWidth');
  }

  const minWidthPx = toPx(minWidth);
  const maxWidthPx = toPx(maxWidth);

  return `@media (min-width: ${minWidthPx}) and (max-width: ${maxWidthPx})`;
};

export const MQ = {
  isMobile: lessThan(Breakpoint.mobile),
  isTabletSmall: lessThan(Breakpoint.tabletSmall),
  isOnlyTabletSmall: between(Breakpoint.mobile, Breakpoint.tabletSmall),
  isTablet: lessThan(Breakpoint.tablet),
  isOnlyTablet: between(Breakpoint.tabletSmall, Breakpoint.tablet),
  isDesktop: greaterThan(Breakpoint.tablet),
  isDesktopMed: greaterThan(Breakpoint.desktop),
  isDesktopWide: greaterThan(Breakpoint.desktopWide),
} as const;
