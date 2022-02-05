import { CSSObject } from '@emotion/react';
import { StyledComponent } from '@emotion/styled';

import {
    FieldLabelStateProps,
    StyledFieldLabelProps,
} from 'components/Field/FieldLabel/FieldLableProps';
import styled from 'components/styled';

import { isThemeOverride, Shorthand, toEm } from 'utils/styles';

import { Colors } from 'styles/tokens/colors';
import { Weights } from 'styles/tokens/font';

export const StyledFieldLabel: StyledComponent<StyledFieldLabelProps> =
    styled.label(({ theme, componentState }): CSSObject => {
        const inverted: boolean = isThemeOverride<FieldLabelStateProps>(
            theme,
            componentState,
            'inverted'
        );

        return {
            display: 'block',
            fontSize: toEm(0.75),
            fontWeight: Weights.black,
            lineHeight: toEm(0.875),
            color: Colors.neutral700,
            margin: Shorthand.marginToEm(0, 0, 0.5, 0),

            ...(inverted && {
                color: Colors.neutral100,
            }),

            ...(componentState.floating && {
                cursor: 'text',
                userSelect: 'none',
                pointerEvents: 'none',
            }),
        };
    });
