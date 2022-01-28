import { BreakpointsPixels } from 'styles/tokens/breakpoints';

interface Viewport {
    name: string;
    styles: {
        width: string;
        height: string;
    };
}

export const MobileViewports: string[] = [
    'mobile',
    'mobileSmall',
    'iPhoneX',
    'iPhone678Plus',
    'iPhone678',
    'iPhone5SE',
];

export const Viewports: Record<string, Viewport> = {
    desktopWide: {
        name: 'Wide Desktop Breakpoint',
        styles: {
            width: BreakpointsPixels.desktopWide,
            height: '1080px',
        },
    },
    laptopHiDPI: {
        name: 'Laptop with High DPI',
        styles: {
            width: '1440px',
            height: '900px',
        },
    },
    laptopMDPI: {
        name: 'Laptop with Medium DPI',
        styles: {
            width: '1280px',
            height: '800px',
        },
    },
    iPadPro: {
        name: 'iPad Pro',
        styles: {
            width: '1024px',
            height: '1366px',
        },
    },
    tabletLarge: {
        name: 'Large Tablet Breakpoint',
        styles: {
            width: BreakpointsPixels.tabletLarge,
            height: '1024px',
        },
    },
    tablet: {
        name: 'Tablet Breakpoint',
        styles: {
            width: BreakpointsPixels.tablet,
            height: '1024px',
        },
    },
    tabletSmall: {
        name: 'Small Tablet Breakpoint',
        styles: {
            width: BreakpointsPixels.tabletSmall,
            height: '1024px',
        },
    },
    iPad: {
        name: 'iPad',
        styles: {
            width: '768px',
            height: '1024px',
        },
    },
    iPadMini: {
        name: 'iPad Mini',
        styles: {
            width: '768px',
            height: '1024px',
        },
    },
    mobile: {
        name: 'Mobile Breakpoint',
        styles: {
            width: BreakpointsPixels.mobile,
            height: '812px',
        },
    },
    mobileSmall: {
        name: 'Small Mobile Breakpoint',
        styles: {
            width: BreakpointsPixels.mobileSmall,
            height: '812px',
        },
    },
    iPhone678Plus: {
        name: 'iPhone 6/7/8 Plus',
        styles: {
            width: '414px',
            height: '736px',
        },
    },
    iPhoneX: {
        name: 'iPhone X',
        styles: {
            width: '375px',
            height: '812px',
        },
    },
    iPhone678: {
        name: 'iPhone 6/7/8',
        styles: {
            width: '375px',
            height: '667px',
        },
    },
    iPhone5SE: {
        name: 'iPhone 5/SE',
        styles: {
            width: '320px',
            height: '568px',
        },
    },
};
