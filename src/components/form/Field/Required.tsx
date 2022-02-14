import { VFC } from 'react';
import { StyledComponent } from '@emotion/styled';

import styled from 'components/styled';
import { Text, TextProps } from 'components/Text';

import { Shorthand, toPixels } from 'utils/styles';

import { Colors } from 'styles/tokens/colors';

export const StyledRequired: StyledComponent<TextProps> = styled(Text)({
    fontSize: toPixels(24),
    paddingTop: Shorthand.paddingToEm(0.1),
    marginLeft: Shorthand.marginToEm(0.5),
    color: Colors.navy900,
});

export const Required: VFC<TextProps> = props => (
    <StyledRequired inline {...props}>
        *
    </StyledRequired>
);
