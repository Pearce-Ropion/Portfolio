import { FC } from 'react';

import {
    FormFieldProps,
    FormFieldStateProps,
    Required,
    StyledFormField,
} from 'components/form/Field';
import { Text } from 'components/Text';

import { Shorthand, toPixels } from 'utils/styles';

import { Colors } from 'styles/tokens/colors';

export const FormField: FC<FormFieldProps> = ({
    children,
    required,
    componentState,
    ...props
}) => {
    const formFieldState: FormFieldStateProps = {
        required,
        ...componentState,
    };

    return (
        <StyledFormField {...props} componentState={formFieldState}>
            {children}
            {required && <Required />}
        </StyledFormField>
    );
};
