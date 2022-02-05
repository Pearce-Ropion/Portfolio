import { NamedExoticComponent } from 'react';
import { useAddonState } from '@storybook/client-api';
import { DecoratorFn } from '@storybook/react';
import * as CSS from 'csstype';

import { Backgrounds, InvertedBackgrounds } from 'utils/backgrounds';
import { MobileViewports } from 'utils/viewports';

import { ColorsByValue } from 'styles/tokens/colors';

export type StoryContext = Parameters<DecoratorFn>[1] & {
    component?: NamedExoticComponent;
};

export interface StoryGlobals {
    backgrounds: typeof Backgrounds[number];
}

export interface StoryParameters {
    backgrounds: {
        default: string;
    };
    componentName?: string;
    description?: string;
    notes?: string;
    page: {
        inverted?: boolean;
        disablePadding?: boolean;
    };
    viewport: {
        defaultViewport: string;
    };
}

export const useInvertPage = (context: StoryContext): boolean => {
    const { parameters, globals } = context;
    const { backgrounds: globalBackground = {} } = globals as StoryGlobals;
    const { backgrounds, page = {} } = parameters as StoryParameters;

    const { inverted } = page;
    if (inverted !== undefined) {
        return inverted;
    }

    const userSelectedBackgroundColor: CSS.Property.Color =
        globalBackground.value;

    const userSelectedBackground: string =
        ColorsByValue[userSelectedBackgroundColor];

    if (userSelectedBackground) {
        return InvertedBackgrounds.includes(userSelectedBackground);
    }

    if (InvertedBackgrounds.includes(backgrounds.default)) {
        return true;
    }

    return false;
};

interface ViewportState {
    selected?: string;
}

export const useDisablePagePadding = (context: StoryContext): boolean => {
    const viewportAddonId = 'storybook/viewport';
    const [viewportState] = useAddonState<ViewportState>(viewportAddonId, {});

    const { parameters } = context;
    const { viewport, page } = parameters as StoryParameters;

    const pageSettings = page || {};
    if (pageSettings.disablePadding !== undefined) {
        return pageSettings.disablePadding;
    }

    const { selected: userSelectedViewport } = viewportState;

    if (userSelectedViewport) {
        return MobileViewports.includes(userSelectedViewport);
    }

    if (MobileViewports.includes(viewport.defaultViewport)) {
        return true;
    }

    return false;
};
