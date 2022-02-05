import { FC, memo } from 'react';
import { Global, ThemeProvider } from '@emotion/react';

import { LayoutProps, StyledLayout } from 'components/Layout';

import { useTheme } from 'state/theme';
import { useViewportHandler } from 'state/viewport';

import { GlobalStyles } from 'styles/global';

export const Layout: FC<LayoutProps> = memo(({ children, ...props }) => {
    useViewportHandler();

    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <Global styles={GlobalStyles} />
            <StyledLayout {...props}>{children}</StyledLayout>
        </ThemeProvider>
    );
});
