import styled, { StyledComponent } from '@emotion/styled';

import { StyledLayoutProps } from 'components/Layout';

import { styledTagOptions } from 'styles/styled';

export const StyledLayout: StyledComponent<StyledLayoutProps> = styled(
    'main',
    styledTagOptions
)();
