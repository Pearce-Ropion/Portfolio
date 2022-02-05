import { FC, memo } from 'react';

import {
    ContainerProps,
    ContainerStateProps,
    DEFAULT_CONTAINER_SIZE,
    StyledContainer,
} from 'components/Container';

export const Container: FC<ContainerProps> = memo(
    ({
        children,
        size = DEFAULT_CONTAINER_SIZE,
        componentState = {},
        ...props
    }) => {
        const containerState: ContainerStateProps = {
            size,
            ...componentState,
        };

        return (
            <StyledContainer componentState={containerState} {...props}>
                {children}
            </StyledContainer>
        );
    }
);
