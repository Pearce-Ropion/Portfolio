import { CSSObject } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';

import { StyledFormFieldProps } from 'components/form/Field';

import { Shorthand, toPercent } from 'utils/styles';

import { styledTagOptions } from 'styles/styled';
import { MQ } from 'styles/tokens/media-query';

export const StyledFormField: StyledComponent<StyledFormFieldProps> = styled(
    'div',
    styledTagOptions
)(
    ({ componentState }): CSSObject => ({
        width: toPercent(100),

        [MQ.isMobile]: {
            marginBottom: Shorthand.marginToEm(1.125),

            '&:last-of-type': {
                marginBottom: 0,
            },
        },

        ...(componentState.required && {
            position: 'relative',
        }),
    })
);
