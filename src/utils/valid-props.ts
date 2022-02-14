import { AllHTMLAttributes } from 'react';
import isPropValid from '@emotion/is-prop-valid';

export const validHTMLProps = <
    E extends HTMLElement,
    P = Record<string, unknown>
>(
    props: AllHTMLAttributes<E> & P
): AllHTMLAttributes<E> => {
    const validProps: AllHTMLAttributes<E> = {};

    for (const propName in props) {
        if (isPropValid(propName)) {
            validProps[propName as keyof AllHTMLAttributes<E>] =
                props[propName as keyof AllHTMLAttributes<E> & P];
        }
    }

    return validProps;
};
