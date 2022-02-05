import { CSSObject } from '@emotion/react';
import { StyledComponent } from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledStandardIconProps } from 'components/Icon';
import styled from 'components/styled';

import { Shorthand } from 'utils/styles';

export const StyledStandardIcon: StyledComponent<StyledStandardIconProps> =
    styled(FontAwesomeIcon)(({ componentState, ...props }): CSSObject => {
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
