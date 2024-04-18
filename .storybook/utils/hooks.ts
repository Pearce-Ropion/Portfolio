import { invert, last, words } from 'lodash';
import { useMemo } from 'react';

import { invertedBackgrounds } from '@sb/utils/backgrounds';
import { Palette } from 'styles/tokens/color';
import { StoryLayout_t, useStoryContext } from 'components/contexts';
import { ValueOf_t } from 'types/helpers';

type ColorsByValue_t = {
  [Color in keyof typeof Palette as typeof Palette[Color]]: Color;
};

const colorsByValue = invert(Palette) as ColorsByValue_t;

interface InvertedArgs_t {
  inverted?: boolean;
}

export const useInverted = (): boolean => {
  const { args, parameters, globals } = useStoryContext<InvertedArgs_t>();
  const { backgrounds: backgroundUser } = globals;
  const { backgrounds: backgroundParam, page = {} } = parameters;

  const { inverted: invertedArg } = args;
  const { inverted: invertedPage } = page;

  return useMemo(() => {
    // inverted was passed as an `arg` to the current story
    if (invertedArg !== undefined) {
      return invertedArg;
    }

    // inverted option was passed to the page parameter
    if (invertedPage !== undefined) {
      return invertedPage;
    }

    // background has been selected by the user (backgrounds addon)
    if (backgroundUser) {
      const userSelectedBackgroundColor = backgroundUser.value;
      const userSelectedBackground = colorsByValue[userSelectedBackgroundColor];

      if (userSelectedBackground) {
        return invertedBackgrounds.includes(userSelectedBackgroundColor);
      }
    }

    // background has been set as a story (or component/preview) parameter
    if (invertedBackgrounds.includes(Palette[backgroundParam.default])) {
      return true;
    }

    return false;
  }, [invertedArg, invertedPage, backgroundUser, backgroundParam.default]);
};

export const useLayout = (): StoryLayout_t => {
  const { parameters } = useStoryContext();
  const { layout: layoutParam, page = {} } = parameters;
  const { layout: layoutPage } = page;

  return useMemo(() => {
    return (
      layoutPage || // layout set in page parameters
      layoutParam || // layout manually set in parameters (default)
      'centered' // fallback
    );
  }, [layoutPage, layoutParam]);
};

export const useBackground = (): ValueOf_t<typeof Palette> => {
  const { parameters, globals } = useStoryContext();
  const { backgrounds: backgroundUser } = globals;
  const { backgrounds: backgroundParam, page = {} } = parameters;
  const { background: backgroundPage } = page;

  const inverted = useInverted();

  return useMemo(() => {
    return (
      backgroundUser?.value || // background manually set by user in addon toolbar
      (inverted && Palette.navy900) || // background is inverted
      backgroundPage || // background manually set in page parameters
      Palette[backgroundParam.default] || // background manually set in parameters (default)
      Palette.neutral0 // fallback
    );
  }, [backgroundUser, inverted, backgroundPage, backgroundParam.default]);
};

export const useComponentName = () => {
  const { component, parameters, title } = useStoryContext<{}, 'div'>();
  const { componentName } = parameters;

  return useMemo(() => {
    return (
      (typeof component?.displayName === 'string' && component?.displayName) ||
      componentName ||
      last(words(title)) ||
      undefined
    );
  }, [componentName, title, component]);
};
