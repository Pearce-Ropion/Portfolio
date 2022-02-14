import { CSSObject } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledStandardIconProps } from 'components/Icon';

import { Shorthand } from 'utils/styles';

import { styledComponentOptions } from 'styles/styled';

export const StyledStandardIcon: StyledComponent<StyledStandardIconProps> =
    styled(
        FontAwesomeIcon,
        styledComponentOptions
    )(({ componentState, ...props }): CSSObject => {
        console.log(props);
        return {
            ...(componentState.marginLeft && {
                marginLeft: Shorthand.marginToEm(0.25),
            }),

            ...(componentState.marginRight && {
                marginRight: Shorthand.marginToEm(0.25),
            }),
        };
    });
