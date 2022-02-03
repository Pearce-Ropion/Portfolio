import { HTMLAttributes, VFC } from 'react';
import { CSSObject } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';

import { Container } from 'components/Container';

import { Shorthand, toPercent } from 'utils/styles';

import { Colors } from 'styles/tokens/colors';

export interface StyledHrProps extends HTMLAttributes<HTMLHRElement> {
    fullBleed?: boolean;
    inverted?: boolean;
}

export const StyledHr: StyledComponent<StyledHrProps> = styled.hr(
    ({ fullBleed, inverted }: StyledHrProps): CSSObject => {
        const styles: CSSObject = {
            width: toPercent(100),
            height: 0,
            margin: Shorthand.margin(0, 'auto'),
            border: 'none',
            borderTop: Shorthand.borderToPx(1, 'solid', Colors.neutral300),
        };

        if (fullBleed) {
            styles.maxWidth = toPercent(100);
        }

        if (inverted) {
            styles.borderTopColor = Colors.neutral700;
        }

        return styles;
    }
);

export type HrProps = StyledHrProps;

export const Hr: VFC<HrProps> = props => {
    const { fullBleed } = props;

    if (fullBleed) {
        return <StyledHr {...props} />;
    } else {
        return (
            <Container>
                <StyledHr {...props} />
            </Container>
        );
    }
};
