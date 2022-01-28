import { FC, HTMLAttributes } from 'react';
import { Global } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import { WindowLocation } from '@reach/router';

import { useViewportHandler } from 'state/viewport';

import { GlobalStyles } from 'styles/global';

export interface LayoutProps extends HTMLAttributes<HTMLElement> {
    location?: WindowLocation;
}

export const StyledLayout: StyledComponent<LayoutProps> = styled.div();

export const Layout: FC<LayoutProps> = ({ children, ...rest }) => {
    useViewportHandler();

    return (
        <>
            <Global styles={GlobalStyles} />
            <StyledLayout {...rest}>{children}</StyledLayout>
        </>
    );
};
