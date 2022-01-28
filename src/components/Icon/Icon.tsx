import { VFC } from 'react';

import {
    DuotoneIcon,
    DuotoneIconProps,
    StandardIcon,
    StandardIconProps,
} from 'components/Icon';

import '@fortawesome/fontawesome-svg-core/styles.css';

export interface IconProps extends StandardIconProps, DuotoneIconProps {
    duotone?: boolean;
}

export const Icon: VFC<IconProps> = ({ duotone, ...props }) => {
    if (duotone) {
        return <DuotoneIcon {...props} />;
    }

    return <StandardIcon {...props} />;
};
