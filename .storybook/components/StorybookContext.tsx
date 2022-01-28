import { createContext, useContext } from 'react';

export const StorybookContext = createContext(false);
StorybookContext.displayName = 'StorybookContext';

export const useIsStorybookPreview = () => {
    return useContext(StorybookContext);
};
