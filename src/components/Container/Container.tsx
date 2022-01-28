import { FC, HTMLAttributes, memo } from 'react';

import { MaxWidth } from 'components/MaxWidth';

import { useViewport, viewportSelectors } from 'state/viewport';

import { toPixels } from 'utils/styles';

const MOBILE_SCALE = 0.75;

export const ContainerSizes: Record<string, number> = {
    small: 24,
    medium: 40,
};

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
    size?: 'small' | 'medium';
}

export const Container: FC<ContainerProps> = memo(
    ({ children, size = 'medium', ...rest }) => {
        const isMobile: boolean = useViewport(viewportSelectors.isMobile);

        const paddingMultiplier: number = isMobile ? MOBILE_SCALE : 1;

        return (
            <MaxWidth
                centered
                width="1080px"
                css={{
                    paddingLeft: toPixels(
                        ContainerSizes[size] * paddingMultiplier
                    ),
                    paddingRight: toPixels(
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
