import { FC, HTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import { capitalize } from 'lodash-es';

import { useViewport, viewportSelectors } from 'state/viewport';

import { withStyles } from 'utils/with-styles';

import { spacing, SpacingMultiplier } from 'styles/tokens/layout';

const MOBILE_SCALE = 0.75;

const MarginSizes: Record<string, SpacingMultiplier> = {
    zero: 0,
    tiny: 0.5,
    mini: 1,
    small: 1.5,
    medium: 2,
    large: 3,
    huge: 4,
    massive: 6,
};

export type MarginSizing =
    | 'zero'
    | 'tiny'
    | 'mini'
    | 'small'
    | 'medium'
    | 'large'
    | 'huge'
    | 'massive'
    | string
    | number;

export interface MarginDirection {
    top?: MarginSizing;
    bottom?: MarginSizing;
    left?: MarginSizing;
    right?: MarginSizing;
}

export interface MarginProps
    extends MarginDirection,
        HTMLAttributes<HTMLElement> {}

export type StyledMarginProps = HTMLAttributes<HTMLElement>;

export const StyledMargin: FC<MarginProps> = ({
    top,
    bottom,
    left,
    right,
    ...props
}) => {
    const isMobile: boolean = useViewport(viewportSelectors.isMobile);

    const marginMultiplier: number = isMobile ? MOBILE_SCALE : 0;

    const styles: CSSObject = Object.entries({
        top,
        bottom,
        left,
        right,
    }).reduce<CSSObject>((acc, [direction, value]) => {
        const property = `margin${capitalize(direction)}`;

        if (value || value === 0) {
            if (typeof value === 'number') {
                acc[property] = `${value}px`;
            } else if (Object.keys(MarginSizes).includes(value)) {
                acc[property] = spacing(MarginSizes[value] * marginMultiplier);
            } else {
                acc[property] = value;
            }
        }

        return acc;
    }, {});

    return withStyles<StyledMarginProps>(styled.div(styles), props);
};

export const Margin: FC<MarginProps> = ({ children, ...rest }) => {
    return <StyledMargin {...rest}>{children}</StyledMargin>;
};
