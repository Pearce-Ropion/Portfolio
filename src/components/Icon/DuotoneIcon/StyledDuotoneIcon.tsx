import { CSSObject } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';

import { StandardIcon, StyledDuotoneIconProps } from 'components/Icon';

import { styledComponentOptions } from 'styles/styled';

export const StyledDuotoneIcon: StyledComponent<StyledDuotoneIconProps> =
    styled(
        StandardIcon,
        styledComponentOptions
    )(({ componentState }): CSSObject => {
        return {
            ...(componentState.primaryColor && {
                '--fa-primary-color': componentState.primaryColor,
            }),

            ...(componentState.primaryColorOpacity !== undefined && {
                '--fa-primary-opacity': componentState.primaryColorOpacity,
            }),

            ...(componentState.secondaryColor && {
                '--fa-secondary-color': componentState.secondaryColor,
            }),

            ...(componentState.secondaryColorOpacity !== undefined && {
                '--fa-secondary-opacity': componentState.secondaryColorOpacity,
            }),
        };
    });
