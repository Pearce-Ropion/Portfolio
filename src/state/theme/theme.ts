import { UseBoundStore } from 'zustand';

import { createSelectors, createStore, Selectors } from 'state/create-store';

export interface ThemeState {
    [slice: string]: unknown;
    inverted: boolean;
}

export const themeStore: UseBoundStore<ThemeState> = createStore<ThemeState>(
    'ThemeStore',
    () => ({
        inverted: false,
    })
);

export const useTheme: UseBoundStore<ThemeState> = themeStore;
export const themeSelectors: Selectors<ThemeState> =
    createSelectors<ThemeState>(themeStore);
