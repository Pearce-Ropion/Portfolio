import { FC, HTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import * as CSS from 'csstype';

export interface MaxWidthProps extends HTMLAttributes<HTMLElement> {
    width: CSS.Property.MaxWidth;
    centered?: boolean;
}

export const StyledMaxWidth: StyledComponent<MaxWidthProps> = styled.div(
    ({ width, centered }: MaxWidthProps): CSSObject => {
        const styles: CSSObject = { maxWidth: width };

        if (centered) {
            styles.marginLeft = 'auto';
            styles.marginRight = 'auto';
        }

        return styles;
    }
);

export const MaxWidth: FC<MaxWidthProps> = ({ children, ...rest }) => {
    return <StyledMaxWidth {...rest}>{children}</StyledMaxWidth>;
};
