import { useEffect } from 'react';
import { debounce } from 'lodash-es';

import { ViewportState, viewportStore } from 'state/viewport';

export const useViewportHandler = () => {
    useEffect(() => {
        const { calculateVariables }: ViewportState = viewportStore.getState();
        calculateVariables();
    }, []);

    useEffect(() => {
        const { calculateVariables }: ViewportState = viewportStore.getState();

        const handleResize = debounce(calculateVariables, 200);

        window.addEventListener('resize', handleResize);

        return () => {
            handleResize.cancel();
            window.removeEventListener('resize', handleResize);
        };
    }, []);
};
