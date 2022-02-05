import { memo, VFC } from 'react';
import { cx } from '@emotion/css';

import {
    DuotoneIconProps,
    DuotoneIconStateProps,
    StyledDuotoneIcon,
} from 'components/Icon';

export const DuotoneIcon: VFC<DuotoneIconProps> = memo(
    ({
        className,
        swapOpacity,
        primaryColor,
        primaryColorOpacity,
        secondaryColor,
        secondaryColorOpacity,
        componentState = {},
        ...props
    }) => {
        const classes = cx(className, {
            'fa-swap-opacity': swapOpacity,
        });

        const duotoneIconState: DuotoneIconStateProps = {
            primaryColor,
            primaryColorOpacity,
            secondaryColor,
            secondaryColorOpacity,
            ...componentState,
        };

        return (
            <StyledDuotoneIcon
                className={classes}
                componentState={duotoneIconState}
                {...props}
            />
        );
    }
);
