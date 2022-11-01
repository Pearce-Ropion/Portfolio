import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { WithOverrideState, WithState } from 'components';

export interface HrStateProps {
    fullBleed?: boolean;
    inverted?: boolean;
}

export type HrElement = DetailedHTMLProps<
    HTMLAttributes<HTMLHRElement>,
    HTMLHRElement
>;

export interface StyledHrProps extends HrElement, WithState<HrStateProps> {}

export interface HrProps extends HrElement, WithOverrideState<HrStateProps> {}
