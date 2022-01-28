import { VFC } from 'react';
import { cx } from '@emotion/css';
import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import * as CSS from 'csstype';

import { StandardIcon, StandardIconProps } from 'components/Icon';

import { withStyles } from 'utils/with-styles';

export interface DuotoneIconProps extends StandardIconProps {
    swapOpacity?: boolean;
    primaryColor?: CSS.Property.Color;
    secondaryColor?: CSS.Property.Color;
    primaryColorOpacity?: CSS.Property.Opacity;
    secondaryColorOpacity?: CSS.Property.Opacity;
}

export const DuotoneIcon: VFC<DuotoneIconProps> = ({
    className,
    swapOpacity,
    primaryColor,
    primaryColorOpacity,
    secondaryColor,
    secondaryColorOpacity,
    ...props
}) => {
    const classes = cx(className, {
        'fa-swap-opacity': swapOpacity,
    });

    const cssVariables: CSSObject = {};

    if (primaryColor) {
        cssVariables['--fa-primary-color'] = primaryColor;
    }

    if (primaryColorOpacity) {
        cssVariables['--fa-primary-opacity'] = primaryColorOpacity;
    }

    if (secondaryColor) {
        cssVariables['--fa-secondary-color'] = secondaryColor;
    }

    if (secondaryColorOpacity) {
        cssVariables['--fa-secondary-opacity'] = secondaryColorOpacity;
    }

    return withStyles(styled(StandardIcon)(cssVariables), {
        className: classes,
        ...props,
    });
};
