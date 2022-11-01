import { UseBoundStore } from 'zustand';

import {
  createSelectors,
  createStore,
  Selectors,
  StoreState,
} from 'state/create-store';

import { Breakpoint } from 'styles/tokens/breakpoint';

export interface Viewport {
  width: number;
  height: number;
}

export const getViewport = (): Viewport => ({
  width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
  height: Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0,
  ),
});

export interface BaseViewportState {
  isMobileSmall: boolean;
  isMobile: boolean;
  isOnlyMobile: boolean;
  isTabletSmall: boolean;
  isOnlyTabletSmall: boolean;
  isTablet: boolean;
  isOnlyTablet: boolean;
  isTabletLarge: boolean;
  isOnlyTabletLarge: boolean;
  isDesktop: boolean;
  isDesktopWide: boolean;
}

export interface ViewportState extends StoreState, BaseViewportState {
  viewportWidth: number;
  viewportHeight: number;
  calculateVariables: () => void;
}

export const viewportStore: UseBoundStore<ViewportState> =
  createStore<ViewportState>('ViewportStore', setState => ({
    viewportWidth: 0,
    viewportHeight: 0,
    isMobileSmall: false,
    isMobile: false,
    isOnlyMobile: false,
    isTabletSmall: false,
    isOnlyTabletSmall: false,
    isTablet: false,
    isOnlyTablet: false,
    isTabletLarge: false,
    isOnlyTabletLarge: false,
    isDesktop: false,
    isDesktopWide: false,
    calculateVariables: () => {
      const { width, height }: Viewport = getViewport();

      const isMobileSmall: boolean = width <= Breakpoint.mobileSmall;
      const isMobile: boolean = width <= Breakpoint.mobile;
      const isTabletSmall: boolean = width <= Breakpoint.tabletSmall;
      const isTablet: boolean = width <= Breakpoint.tablet;
      const isTabletLarge: boolean = width <= Breakpoint.tabletLarge;
      const isDesktop: boolean = width > Breakpoint.tabletLarge;
      const isDesktopWide: boolean = width > Breakpoint.desktopWide;

      setState({
        viewportWidth: width,
        viewportHeight: height,
        isMobileSmall,
        isMobile,
        isOnlyMobile: isMobile && !isMobileSmall,
        isTabletSmall,
        isOnlyTabletSmall: isTabletSmall && !isMobile,
        isTablet,
        isOnlyTablet: isTablet && !isTabletSmall,
        isTabletLarge,
        isOnlyTabletLarge: isTabletLarge && !isTablet,
        isDesktop,
        isDesktopWide,
      });
    },
  }));

export const useViewport: UseBoundStore<ViewportState> = viewportStore;
export const viewportSelectors: Selectors<ViewportState> =
  createSelectors<ViewportState>(viewportStore);
