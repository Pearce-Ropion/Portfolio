import { ForwardedRef, ReactElement } from 'react';
import { StyledComponent } from '@emotion/styled';

export const withStyles = <P, T = unknown>(
    Component: StyledComponent<P>,
    props: P,
    ref?: ForwardedRef<T>
): ReactElement<P> => {
    return <Component ref={ref} {...props} />;
};
