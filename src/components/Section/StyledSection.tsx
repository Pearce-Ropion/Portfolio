import { CSSObject } from '@emotion/react';
import { StyledComponent } from '@emotion/styled';

import { SectionSizes, StyledSectionProps } from 'components/Section';
import styled from 'components/styled';

import { Shorthand, toPercent } from 'utils/styles';

import { MQ } from 'styles/tokens/media-query';

export const SectionSizeMap: Record<
    typeof SectionSizes[number],
    Record<string, number>
> = {
    'small-x': {
        desktop: 24,
        mobile: 16,
    },
    small: {
        desktop: 48,
        mobile: 24,
    },
    medium: {
        desktop: 72,
        mobile: 36,
    },
    large: {
        desktop: 108,
        mobile: 54,
    },
};

export const StyledSection: StyledComponent<StyledSectionProps> =
    styled.section(
        ({ componentState }): CSSObject => ({
            width: toPercent(100),

            ...(componentState.size && {
                padding: Shorthand.paddingToPx(
                    0,
                    SectionSizeMap[componentState.size].desktop
                ),

                [MQ.isMobile]: {
                    padding: Shorthand.paddingToPx(
                        0,
                        SectionSizeMap[componentState.size].mobile
                    ),
                },
            }),
        })
    );
