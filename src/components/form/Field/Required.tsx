import { VFC } from 'react';
import styled, { StyledComponent } from '@emotion/styled';

import { Text, TextProps } from 'components/Text';

import { Shorthand, toEm, toPixels } from 'utils/styles';

import { styledComponentOptions } from 'styles/styled';
import { Colors } from 'styles/tokens/colors';

export const StyledRequired: StyledComponent<TextProps> = styled(
    Text,
    styledComponentOptions
)({
    fontSize: toPixels(24),
    paddingTop: Shorthand.paddingToEm(0.1),
    color: Colors.navy900,
    position: 'absolute',
    right: 0,
    top: toEm(0.1),
});

export const Required: VFC<TextProps> = props => (
    <StyledRequired inline {...props}>
        *
    </StyledRequired>
);
