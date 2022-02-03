import { VFC } from 'react';
import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import { startCase } from 'lodash-es';
import {
    findIconDefinition,
    IconProp,
} from '@fortawesome/fontawesome-svg-core';
import {
    FontAwesomeIcon,
    FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import { toEm } from 'utils/styles';
import { withStyles } from 'utils/with-styles';

export interface StyledStandardIconProps extends FontAwesomeIconProps {
    marginLeft?: boolean;
    marginRight?: boolean;
}

export const StyledStandardIcon: VFC<StyledStandardIconProps> = ({
    marginLeft,
    marginRight,
    ...props
}) => {
    const styles: CSSObject = {};

    if (marginLeft) {
        styles.marginLeft = toEm(0.25);
    }

    if (marginRight) {
        styles.marginRight = toEm(0.5);
    }

    return withStyles(styled(FontAwesomeIcon)(styles), props);
};

export interface StandardIconProps extends StyledStandardIconProps {
    icon: IconProp;
}

export const StandardIcon: VFC<StandardIconProps> = props => {
    const { icon, title, ...rest } = props;

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
        iconName = icon.iconName;
    }

    return (
        <StyledStandardIcon
            icon={icon}
            title={title || `${startCase(iconName)} Icon`}
            {...rest}
        />
    );
};
