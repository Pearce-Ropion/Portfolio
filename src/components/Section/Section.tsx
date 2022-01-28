import { FC, HTMLAttributes, memo } from 'react';
import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';

import { useViewport, viewportSelectors } from 'state/viewport';

import { toPixels } from 'utils/styles';
import { withStyles } from 'utils/with-styles';

const SectionSizes: Record<string, Record<string, number>> = {
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

export interface SectionProps extends HTMLAttributes<HTMLElement> {
    size?: 'small-x' | 'small' | 'medium' | 'large';
}

export const StyledSection: FC<SectionProps> = memo(props => {
    const { size } = props;

    const isMobile: boolean = useViewport(viewportSelectors.isMobile);

    const styles: CSSObject = {
        width: '100%',
    };

    if (size) {
        let paddingValue: number = SectionSizes[size].desktop;

        if (isMobile) {
            paddingValue = SectionSizes[size].mobile;
        }

        styles.paddingTop = toPixels(paddingValue);
        styles.paddingBottom = toPixels(paddingValue);
    }

    return withStyles<SectionProps>(styled.section(styles), props);
});

export const Section: FC<SectionProps> = memo(({ children, ...rest }) => {
    return <StyledSection {...rest}>{children}</StyledSection>;
});
