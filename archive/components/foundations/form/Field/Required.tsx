import { VFC } from 'react';
import styled, { StyledComponent } from '@emotion/styled';

import { Text, TextProps } from 'components/Text';

import { toEm } from 'utils/styles';

import { styledComponentOptions } from 'styles/styled';
import { Colors } from 'styles/tokens/colors';

export const StyledRequired: StyledComponent<TextProps> = styled(
    Text,
    styledComponentOptions
)({
    color: Colors.red900,
    position: 'absolute',
    right: toEm(0.5),
    top: toEm(0.2),
});

export const Required: VFC<TextProps> = props => (
    <StyledRequired inline {...props}>
        *
    </StyledRequired>
);
