import {
  StoryArgs_t,
  StoryContext_t,
} from 'components/contexts/Storybook/types';
import { JSXComponent_t } from 'types/react';
import { createContext } from 'utils/context';

export interface StorybookContext_t {
  isStorybook: boolean;
  context?: StoryContext_t;
}

export const [StorybookProvider, useStorybook] =
  createContext<StorybookContext_t>('Storybook', {
    isStorybook: false,
  });

export const useIsStorybookPreview = () => {
  const { isStorybook } = useStorybook();
  return !!isStorybook;
};

export const useStoryContext = <
  Args extends StoryArgs_t = StoryArgs_t,
  Component extends JSXComponent_t = never,
>() => {
  const { context } = useStorybook();
  return context as unknown as StoryContext_t<Args, Component>;
};
