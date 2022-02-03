import { FC, HTMLAttributes } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import { WindowLocation } from '@reach/router';

import { useTheme } from 'state/theme';
import { useViewportHandler } from 'state/viewport';

import { GlobalStyles } from 'styles/global';

export interface LayoutProps extends HTMLAttributes<HTMLElement> {
    location?: WindowLocation;
}

export const StyledLayout: StyledComponent<LayoutProps> = styled.div();

export const Layout: FC<LayoutProps> = ({ children, ...rest }) => {
    useViewportHandler();

    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <Global styles={GlobalStyles} />
            <StyledLayout {...rest}>{children}</StyledLayout>
        </ThemeProvider>
    );
};
