import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { WithOverrideState, WithState } from 'components';

export const SectionSizes = ['small-x', 'small', 'medium', 'large'] as const;
export const DEFAULT_SECTION_SIZE: typeof SectionSizes[number] = 'small';

export interface SectionStateProps {
    size?: typeof SectionSizes[number];
}

export type SectionElement = DetailedHTMLProps<
    HTMLAttributes<HTMLElement>,
    HTMLElement
>;

export interface StyledSectionProps
    extends SectionElement,
        WithState<SectionStateProps> {}

export interface SectionProps
    extends SectionElement,
        WithOverrideState<SectionStateProps> {}
