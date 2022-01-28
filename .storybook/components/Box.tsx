import { FC } from 'react';
import { CSSObject } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import * as CSS from 'csstype';

export interface BoxProps {
    color?: CSS.Property.BackgroundColor;
}

export const StyledBox: StyledComponent<BoxProps> = styled.div(
    ({ color }: BoxProps): CSSObject => ({
        backgroundColor: color,
        width: '150px',
        height: '150px',
    })
);

export const Box: FC<BoxProps> = ({ children, ...rest }) => {
    return <StyledBox {...rest}>{children}</StyledBox>;
};
