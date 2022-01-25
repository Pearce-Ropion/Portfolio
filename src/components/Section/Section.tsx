import { FC, HTMLAttributes, memo } from 'react';
import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import * as CSS from 'csstype';

import { useViewport, viewportSelectors } from 'state/viewport';

import { withStyles } from 'utils/with-styles';

import { spacing } from 'styles/tokens/layout';

const SectionSizes: Record<string, Record<string, CSS.Property.Padding>> = {
    mini: {
        desktop: spacing(3),
        mobile: spacing(2),
    },
    small: {
        desktop: spacing(6),
        mobile: spacing(3),
    },
    medium: {
        desktop: spacing(9),
        mobile: spacing(4.5),
    },
    large: {
        desktop: spacing(12),
        mobile: spacing(6),
    },
};

export interface SectionProps extends HTMLAttributes<HTMLElement> {
    size?: 'mini' | 'small' | 'medium' | 'large';
}

export const StyledSection: FC<SectionProps> = memo(props => {
    const { size } = props;

    const isMobile: boolean = useViewport(viewportSelectors.isMobile);

    const styles: CSSObject = {
        width: '100%',
    };

    if (size) {
        let padding: CSS.Property.Padding = SectionSizes[size].desktop;

        if (isMobile) {
            padding = SectionSizes[size].mobile;
        }

        styles.paddingTop = padding;
        styles.paddingBottom = padding;
    }

    return withStyles<SectionProps>(styled.section(styles), props);
});

export const Section: FC<SectionProps> = memo(({ children, ...rest }) => {
    return <StyledSection {...rest}>{children}</StyledSection>;
});
