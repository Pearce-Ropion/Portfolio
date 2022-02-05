import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { WithOverrideState, WithState } from 'components';

export interface StandardIconStateProps {
    marginLeft?: boolean;
    marginRight?: boolean;
}

export interface StyledStandardIconProps
    extends FontAwesomeIconProps,
        WithState<StandardIconStateProps> {}

export interface BaseIconProps {
    icon: IconProp;
}

export interface StandardIconProps
    extends FontAwesomeIconProps,
        BaseIconProps,
        WithOverrideState<StandardIconStateProps> {}
