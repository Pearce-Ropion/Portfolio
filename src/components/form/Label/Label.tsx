import { FC, memo } from 'react';

import {
    FormLabelProps,
    FormLabelStateProps,
    StyledFormLabel,
} from 'components/form/Label';

export const FormLabel: FC<FormLabelProps> = memo(
    ({ children, floating, inverted, componentState = {}, ...props }) => {
        const formLabelState: FormLabelStateProps = {
            floating,
            inverted,
            ...componentState,
        };

        return (
            <StyledFormLabel componentState={formLabelState} {...props}>
                {children}
            </StyledFormLabel>
        );
    }
);
