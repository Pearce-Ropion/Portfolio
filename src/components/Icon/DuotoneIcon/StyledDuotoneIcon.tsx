import { CSSObject } from '@emotion/react';
import { StyledComponent } from '@emotion/styled';

import { StandardIcon, StyledDuotoneIconProps } from 'components/Icon';
import styled from 'components/styled';

export const StyledDuotoneIcon: StyledComponent<StyledDuotoneIconProps> =
    styled(StandardIcon)(({ componentState, ...props }): CSSObject => {
        console.log(props);
        return {
            ...(componentState.primaryColor && {
                '--fa-primary-color': componentState.primaryColor,
            }),

            ...(componentState.primaryColorOpacity && {
                '--fa-primary-opacity': componentState.primaryColorOpacity,
            }),

            ...(componentState.secondaryColor && {
                '--fa-secondary-color': componentState.secondaryColor,
            }),

            ...(componentState.secondaryColorOpacity && {
                '--fa-secondary-opacity': componentState.secondaryColorOpacity,
            }),
        };
    });
