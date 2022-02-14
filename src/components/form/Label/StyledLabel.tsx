import { CSSObject } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';

import {
    FormLabelStateProps,
    StyledFormLabelProps,
} from 'components/form/Label';

import { isThemeOverride, Shorthand, toEm } from 'utils/styles';

import { styledTagOptions } from 'styles/styled';
import { Colors } from 'styles/tokens/colors';
import { Weights } from 'styles/tokens/font';

export const StyledFormLabel: StyledComponent<StyledFormLabelProps> = styled(
    'label',
    styledTagOptions
)(({ theme, componentState }): CSSObject => {
    const inverted: boolean = isThemeOverride<FormLabelStateProps>(
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
