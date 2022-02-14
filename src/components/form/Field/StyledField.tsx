import { CSSObject } from '@emotion/react';
import { StyledComponent } from '@emotion/styled';

import { StyledFormFieldProps } from 'components/form/Field';
import styled from 'components/styled';

import { Shorthand, toPercent } from 'utils/styles';

import { MQ } from 'styles/tokens/media-query';

export const StyledFormField: StyledComponent<StyledFormFieldProps> =
    styled.div(
        ({ componentState }): CSSObject => ({
            width: toPercent(100),

            [MQ.isMobile]: {
                marginBottom: Shorthand.marginToEm(1.125),

                '&:last-of-type': {
                    marginBottom: 0,
                },
            },

            ...(componentState.required && {
                display: 'flex',
            }),
        })
    );
