import { CSSObject } from '@emotion/react';
import { StyledComponent } from '@emotion/styled';

import { HrStateProps, StyledHrProps } from 'components/Hr';
import styled from 'components/styled';

import { isThemeOverride, Shorthand, toPercent } from 'utils/styles';

import { Colors } from 'styles/tokens/colors';

export const StyledHr: StyledComponent<StyledHrProps> = styled.hr(
    ({ theme, componentState }): CSSObject => {
        const inverted: boolean = isThemeOverride<HrStateProps>(
            theme,
            componentState,
            'inverted'
        );

        return {
            width: toPercent(100),
            height: 0,
            margin: Shorthand.margin(0, 'auto'),
            border: 'none',
            borderTop: Shorthand.borderToPx(1, 'solid', Colors.neutral300),

            ...(componentState.fullBleed && {
                maxWidth: toPercent(100),
            }),

            ...(inverted && {
                borderTopColor: Colors.neutral700,
            }),
        };
    }
);
