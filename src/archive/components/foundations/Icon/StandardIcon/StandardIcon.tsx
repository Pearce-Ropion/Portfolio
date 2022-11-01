import { memo, VFC } from 'react';
import { startCase } from 'lodash-es';

import {
    StandardIconProps,
    StandardIconStateProps,
    StyledStandardIcon,
} from 'components/Icon';

export const StandardIcon: VFC<StandardIconProps> = memo(
    ({
        icon,
        title,
        marginLeft,
        marginRight,
        componentState = {},
        ...props
    }) => {
        let iconName: string | undefined;

        if (typeof icon === 'string') {
            iconName = icon;
        } else if (Array.isArray(icon)) {
            iconName = icon[1];
        } else {
            iconName = icon.iconName;
        }

        const standardIconState: StandardIconStateProps = {
            marginLeft,
            marginRight,
            ...componentState,
        };

        return (
            <StyledStandardIcon
                icon={icon}
                title={title || `${startCase(iconName)} Icon`}
                componentState={standardIconState}
                {...props}
            />
        );
    }
);
