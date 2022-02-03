import { useRef } from 'react';
import { v4, v5 } from 'uuid';

const useIdNamespace: string = v4();

export const useId = (identifier?: string) => {
    const idRef = useRef<string>(
        identifier ? v5(identifier, useIdNamespace) : v4()
    );

    return idRef.current;
};
