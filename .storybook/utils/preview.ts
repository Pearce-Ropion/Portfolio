import { NamedExoticComponent } from 'react';
import { useAddonState } from '@storybook/client-api';
import { DecoratorFn } from '@storybook/react';
import * as CSS from 'csstype';

import {
  // backgrounds,
  invertedBackgrounds,
  Background_t,
} from 'utils/backgrounds';
import { MobileViewports } from 'utils/viewports';
import { invert } from 'lodash';
import { Palette } from 'styles/tokens/color';

// import { ColorsByValue } from 'styles/tokens/colors';

export interface StoryGlobals {
  backgrounds?: Background_t;
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

export interface StoryContext {
  globals: StoryGlobals;
  parameters: StoryParameters;
  component?: NamedExoticComponent;
}

const colorsByValue = invert(Palette);

export const shouldInvertPage = (context: StoryContext): boolean => {
  const { parameters, globals } = context;
  const { backgrounds: globalBackground } = globals;
  const { backgrounds, page = {} } = parameters as StoryParameters;

  const { inverted } = page;
  if (inverted !== undefined) {
    return inverted;
  }

  if (globalBackground) {
    const userSelectedBackgroundColor = globalBackground.value;
    const userSelectedBackground = colorsByValue[userSelectedBackgroundColor];

    if (userSelectedBackground) {
      return invertedBackgrounds.includes(userSelectedBackground);
    }

    if (invertedBackgrounds.includes(backgrounds.default)) {
      return true;
    }
  }

  return false;
};

interface ViewportState {
  selected?: string;
}

// export const useDisablePagePadding = (context: StoryContext): boolean => {
//     const viewportAddonId = 'storybook/viewport';
//     const [viewportState] = useAddonState<ViewportState>(viewportAddonId, {});

//     const { parameters } = context;
//     const { viewport, page } = parameters as StoryParameters;

//     const pageSettings = page || {};
//     if (pageSettings.disablePadding !== undefined) {
//         return pageSettings.disablePadding;
//     }

//     const { selected: userSelectedViewport } = viewportState;

//     if (userSelectedViewport) {
//         return MobileViewports.includes(userSelectedViewport);
//     }

//     if (MobileViewports.includes(viewport.defaultViewport)) {
//         return true;
//     }

//     return false;
// };
