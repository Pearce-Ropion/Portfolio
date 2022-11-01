import { FC, memo } from 'react';

import {
    DEFAULT_TEXT_WEIGHT,
    StyledText,
    TextProps,
    TextStateProps,
} from 'components/Text';

export const Text: FC<TextProps> = memo(
    ({
        children,
        alignCenter,
        alignCenterMobile,
        alignRight,
        inverted,
        color,
        inline,
        weight = DEFAULT_TEXT_WEIGHT,
        componentState = {},
        ...props
    }) => {
        const textState: TextStateProps = {
            alignCenter,
            alignCenterMobile,
            alignRight,
            inverted,
            color,
            inline,
            weight,
            ...componentState,
        };

        return (
            <StyledText componentState={textState} {...props}>
                {children}
            </StyledText>
        );
    }
);
