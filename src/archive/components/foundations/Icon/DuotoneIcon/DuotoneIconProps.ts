import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import * as CSS from 'csstype';

import { WithOverrideState, WithState } from 'components';
import { BaseIconProps, StandardIconStateProps } from 'components/Icon';

export interface DuotoneIconStateProps extends StandardIconStateProps {
    primaryColor?: CSS.Property.Color;
    secondaryColor?: CSS.Property.Color;
    primaryColorOpacity?: CSS.Property.Opacity;
    secondaryColorOpacity?: CSS.Property.Opacity;
}

export interface StyledDuotoneIconProps
    extends FontAwesomeIconProps,
        WithState<DuotoneIconStateProps> {}

export interface DuotoneIconProps
    extends FontAwesomeIconProps,
        BaseIconProps,
        WithOverrideState<DuotoneIconStateProps> {
    swapOpacity?: boolean;
}
