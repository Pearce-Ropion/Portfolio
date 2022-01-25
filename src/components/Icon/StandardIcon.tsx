import { FC } from 'react';
import { startCase } from 'lodash-es';
import {
    findIconDefinition,
    IconProp,
} from '@fortawesome/fontawesome-svg-core';
import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import { spacing } from 'styles/tokens/layout';

export interface StandardIconProps extends FontAwesomeIconProps {
    icon: IconProp;
    marginLeft?: boolean;
    marginRight?: boolean;
}

export const StandardIcon: FC<StandardIconProps> = props => {
    const { icon, marginLeft, marginRight, title, ...rest } = props;

    let iconName: string | undefined;
    if (typeof icon === 'string') {
        iconName = findIconDefinition({
            prefix: 'fas',
            iconName: icon,
        }).iconName;
    } else if (Array.isArray(icon)) {
        iconName = findIconDefinition({
            prefix: icon[0],
            iconName: icon[1],
        }).iconName;
    } else {
        iconName = findIconDefinition(icon).iconName;
    }

    return (
        <FontAwesomeIcon
            css={{
                marginLeft: marginLeft ? spacing(0.5, { em: true }) : 0,
                marginRight: marginRight ? spacing(1, { em: true }) : 0,
            }}
            role="presentation"
            icon={icon}
            title={title || `${startCase(iconName)} Icon`}
            {...rest}
        />
    );
};
