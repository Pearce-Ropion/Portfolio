import { FC, HTMLAttributes, memo } from 'react';

import { MaxWidth } from 'components/MaxWidth';

import { useViewport, viewportSelectors } from 'state/viewport';

import { spacing, SpacingMultiplier } from 'styles/tokens/layout';

const MOBILE_SCALE = 0.75;

export const ContainerSizes: Record<string, SpacingMultiplier> = {
    small: 3,
    medium: 5,
};

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
    size?: 'small' | 'medium';
}

export const Container: FC<ContainerProps> = memo(
    ({ children, size = 'medium', ...rest }) => {
        const isMobile: boolean = useViewport(viewportSelectors.isMobile);

        const paddingMultiplier: number = isMobile ? MOBILE_SCALE : 0;

        return (
            <MaxWidth
                centered
                width="1080px"
                css={{
                    paddingLeft: spacing(
                        ContainerSizes[size] * paddingMultiplier
                    ),
                    paddingRight: spacing(
                        ContainerSizes[size] * paddingMultiplier
                    ),
                }}
                {...rest}
            >
                {children}
            </MaxWidth>
        );
    }
);
