import { CSSObject } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';

import { ContainerSizes, StyledContainerProps } from 'components/Container';

import { Shorthand, toPixels } from 'utils/styles';

import { styledTagOptions } from 'styles/styled';
import { MQ } from 'styles/tokens/media-query';

const MOBILE_SCALE = 0.75;

export const ContainerSizeMap: Record<typeof ContainerSizes[number], number> = {
    small: 24,
    medium: 40,
};

export const StyledContainer: StyledComponent<StyledContainerProps> = styled(
    'div',
    styledTagOptions
)(
    ({ componentState }): CSSObject => ({
        maxWidth: toPixels(1080),
        margin: Shorthand.margin(0, 'auto'),

        ...(componentState.size && {
            padding: Shorthand.paddingToPx(
                0,
                ContainerSizeMap[componentState.size]
            ),

            [MQ.isMobile]: {
                padding: Shorthand.paddingToPx(
                    0,
                    ContainerSizeMap[componentState.size] * MOBILE_SCALE
                ),
            },
        }),
    })
);
