import { Breakpoint } from 'styles/tokens/breakpoint';
import { toPx } from 'utils/style/units';

export const MobileViewports = ['mobile', 'mobileSmall'];

export const Viewports = {
  desktopWide: {
    name: 'Wide Desktop',
    styles: {
      width: toPx(Breakpoint.desktopWide),
      height: '1080px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: toPx(Breakpoint.desktop),
      height: '1080px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: toPx(Breakpoint.tablet),
      height: '1024px',
    },
  },
  tabletSmall: {
    name: 'Small Tablet',
    styles: {
      width: toPx(Breakpoint.tabletSmall),
      height: '1024px',
    },
  },
  mobile: {
    name: 'Mobile',
    styles: {
      width: toPx(Breakpoint.mobile),
      height: '812px',
    },
  },
} as const;
