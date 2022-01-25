import { FC } from 'react';

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

export const Icon: FC<IconProps> = ({ duotone, ...props }) => {
    if (duotone) {
        return <DuotoneIcon {...props} />;
    }

    return <StandardIcon {...props} />;
};
