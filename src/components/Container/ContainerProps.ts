import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { WithOverrideState, WithState } from 'components';

export const ContainerSizes = ['small', 'medium'] as const;
export const DEFAULT_CONTAINER_SIZE: typeof ContainerSizes[number] = 'medium';

export interface ContainerStateProps {
    size?: typeof ContainerSizes[number];
}

export type ContainerElement = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface StyledContainerProps
    extends ContainerElement,
        WithState<ContainerStateProps> {}

export interface ContainerProps
    extends ContainerElement,
        WithOverrideState<ContainerStateProps> {}
