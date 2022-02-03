import { UseBoundStore } from 'zustand';

import {
    createSelectors,
    createStore,
    Selectors,
    StoreState,
} from 'state/create-store';

export interface BaseThemeState {
    inverted: boolean;
}

export interface ThemeState extends StoreState, BaseThemeState {}

export const defaultThemeState: ThemeState = {
    inverted: false,
};

export const themeStore: UseBoundStore<ThemeState> = createStore<ThemeState>(
    'ThemeStore',
    () => defaultThemeState
);

export const useTheme: UseBoundStore<ThemeState> = themeStore;
export const themeSelectors: Selectors<ThemeState> =
    createSelectors<ThemeState>(themeStore);
