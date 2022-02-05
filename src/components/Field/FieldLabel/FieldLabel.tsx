import { FC, memo } from 'react';

import {
    FieldLabelProps,
    FieldLabelStateProps,
    StyledFieldLabel,
} from 'components/Field/FieldLabel';

export const FieldLabel: FC<FieldLabelProps> = memo(
    ({ children, floating, inverted, componentState = {}, ...props }) => {
        const fieldLabelState: FieldLabelStateProps = {
            floating,
            inverted,
            ...componentState,
        };

        return (
            <StyledFieldLabel componentState={fieldLabelState} {...props}>
                {children}
            </StyledFieldLabel>
        );
    }
);
