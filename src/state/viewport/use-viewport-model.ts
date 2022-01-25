import { useEffect } from 'react';
import { debounce, DebouncedFunc } from 'lodash-es';

import { ViewportState, viewportStore } from 'state/viewport';

export const useViewportModel = () => {
    useEffect(() => {
        const { calculateVariables }: ViewportState = viewportStore.getState();
        calculateVariables();
    }, []);

    useEffect(() => {
        const { calculateVariables }: ViewportState = viewportStore.getState();

        const handleResize: DebouncedFunc<ViewportState['calculateVariables']> =
            debounce(calculateVariables, 200);

        window.addEventListener('resize', handleResize);

        return () => {
            handleResize.cancel();
            window.removeEventListener('resize', handleResize);
        };
    }, []);
};
