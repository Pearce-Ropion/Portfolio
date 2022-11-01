import { FC } from 'react';

import { FormRowProps, StyledFormRow } from 'components/form/Row';

export const FormRow: FC<FormRowProps> = ({ children, ...props }) => {
    return <StyledFormRow {...props}>{children}</StyledFormRow>;
};
