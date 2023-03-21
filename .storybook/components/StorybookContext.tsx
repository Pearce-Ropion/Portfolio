import { createContext } from 'utils/context';

interface StorybookContext_t {
  isStorybook: boolean;
}

export const [StorybookProvider, useStorybook] =
  createContext<StorybookContext_t>('Storybook', {
    isStorybook: false,
  });

export const useIsStorybookPreview = () => {
  const { isStorybook } = useStorybook();
  return isStorybook;
};
