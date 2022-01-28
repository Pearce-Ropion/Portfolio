import { FC, HTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import { capitalize } from 'lodash-es';

import { useViewport, viewportSelectors } from 'state/viewport';

import { toPixels } from 'utils/styles';
import { withStyles } from 'utils/with-styles';

const MOBILE_SCALE = 0.75;

export const MarginSizes: Record<string, number> = {
    zero: 0,
    'small-2x': 4,
    'small-x': 8,
    small: 12,
    medium: 16,
    large: 24,
    'large-x': 32,
    'large-2x': 40,
    'large-3x': 48,
    'large-4x': 64,
};

export type MarginSizing =
    | 'zero'
    | 'small-2x'
    | 'small-x'
    | 'small'
    | 'medium'
    | 'large'
    | 'large-x'
    | 'large-2x'
    | 'large-3x'
    | 'large-4x'
    | string
    | number;

export const MARGIN_SIZES: MarginSizing[] = Object.keys(MarginSizes);

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

    const marginMultiplier: number = isMobile ? MOBILE_SCALE : 1;

    const styles: CSSObject = Object.entries({
        top,
        bottom,
        left,
        right,
    }).reduce<CSSObject>((acc, [direction, value]) => {
        const property = `margin${capitalize(direction)}`;

        if (value || value === 0) {
            if (typeof value === 'number') {
                acc[property] = toPixels(value);
            } else if (MARGIN_SIZES.includes(value)) {
                acc[property] = toPixels(MarginSizes[value] * marginMultiplier);
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
