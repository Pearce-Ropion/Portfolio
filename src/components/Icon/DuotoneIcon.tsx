import { FC } from 'react';
import { cx } from '@emotion/css';
import { CSSObject } from '@emotion/react';
import * as CSS from 'csstype';

import { StandardIcon, StandardIconProps } from 'components/Icon';

export interface DuotoneIconProps extends StandardIconProps {
    swapOpacity?: boolean;
    primaryColor?: CSS.Property.Color;
    secondaryColor?: CSS.Property.Color;
    primaryColorOpacity?: CSS.Property.Opacity;
    secondaryColorOpacity?: CSS.Property.Opacity;
}

export const DuotoneIcon: FC<DuotoneIconProps> = ({
    swapOpacity,
    primaryColor,
    primaryColorOpacity,
    secondaryColor,
    secondaryColorOpacity,
    ...rest
}) => {
    const classes = cx({
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

    return <StandardIcon className={classes} css={cssVariables} {...rest} />;
};
