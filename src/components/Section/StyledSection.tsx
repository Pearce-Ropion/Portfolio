import { CSSObject } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';

import { SectionSizes, StyledSectionProps } from 'components/Section';

import { Shorthand, toPercent } from 'utils/styles';

import { styledTagOptions } from 'styles/styled';
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

export const StyledSection: StyledComponent<StyledSectionProps> = styled(
    'section',
    styledTagOptions
)(
    ({ componentState }): CSSObject => ({
        width: toPercent(100),

        ...(componentState.size && {
            padding: Shorthand.paddingToPx(
                SectionSizeMap[componentState.size].desktop,
                0
            ),

            [MQ.isMobile]: {
                padding: Shorthand.paddingToPx(
                    SectionSizeMap[componentState.size].mobile,
                    0
                ),
            },
        }),
    })
);
