import { ReactElement } from 'react';
import { StyledComponent } from '@emotion/styled';

export const withStyles = <P,>(
    Component: StyledComponent<P>,
    props: P
): ReactElement<P> => {
    return <Component {...props} />;
};
