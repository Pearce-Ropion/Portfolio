import { FC, memo } from 'react';
import { StyledComponent } from '@emotion/styled';

import styled from 'components/styled';
import {
    DEFAULT_TITLE_TAG,
    DEFAULT_TITLE_VARIANT,
    DEFAULT_TITLE_WEIGHT,
    StyledTitleProps,
    styledTitleStyles,
    TitleProps,
    TitleStateProps,
} from 'components/Title';

export const Title: FC<TitleProps> = memo(
    ({
        children,
        alignCenter,
        alignCenterMobile,
        alignRight,
        inverted,
        color,
        inline,
        variant = DEFAULT_TITLE_VARIANT,
        tag = DEFAULT_TITLE_TAG,
        weight = DEFAULT_TITLE_WEIGHT,
        componentState = {},
        ...props
    }) => {
        const titleState: TitleStateProps = {
            alignCenter,
            alignCenterMobile,
            alignRight,
            inverted,
            color,
            inline,
            variant,
            weight,
            tag,
            ...componentState,
        };

        const Component: StyledComponent<StyledTitleProps> =
            styled(tag)(styledTitleStyles);

        return (
            <Component componentState={titleState} {...props}>
                {children}
            </Component>
        );
    }
);
