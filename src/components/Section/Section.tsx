import { FC, memo } from 'react';

import {
    DEFAULT_SECTION_SIZE,
    SectionProps,
    SectionStateProps,
    StyledSection,
} from 'components/Section';

export const Section: FC<SectionProps> = memo(
    ({
        children,
        size = DEFAULT_SECTION_SIZE,
        componentState = {},
        ...props
    }) => {
        const sectionState: SectionStateProps = {
            size,
            ...componentState,
        };

        return (
            <StyledSection componentState={sectionState} {...props}>
                {children}
            </StyledSection>
        );
    }
);
