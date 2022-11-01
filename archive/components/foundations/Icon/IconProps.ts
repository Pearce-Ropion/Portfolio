import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { WithOverrideState } from 'components';
import { BaseIconProps, DuotoneIconStateProps } from 'components/Icon';

export interface IconProps
    extends FontAwesomeIconProps,
        BaseIconProps,
        WithOverrideState<DuotoneIconStateProps> {
    duotone?: boolean;
}
