import { cloneElement, isValidElement, ReactElement } from 'react';
import { cx } from '@emotion/css';
import {
    findIconDefinition,
    IconDefinition,
    IconLookup,
    IconProp,
} from '@fortawesome/fontawesome-svg-core';

import { Icon, IconProps } from 'components/Icon';

export type IconFactoryIconProp =
    | IconProp
    | Partial<IconProps>
    | ReactElement<IconProps>;

export const isIconLookup = (icon: IconFactoryIconProp): icon is IconLookup => {
    return Boolean((icon as IconLookup).iconName);
};

export const isIconProps = (icon: IconFactoryIconProp): icon is IconProps => {
    return Boolean((icon as IconProps).icon);
};

export const getIconDefintion = (icon: IconProp): IconDefinition => {
    if (typeof icon === 'string') {
        return findIconDefinition({ prefix: 'fas', iconName: icon });
    } else if (Array.isArray(icon)) {
        return findIconDefinition({
            prefix: icon[0],
            iconName: icon[1],
        });
    } else if (isIconLookup(icon)) {
        return findIconDefinition(icon);
    }

    console.error(`Invalid icon definition`, icon);
    throw new Error(`Invalid icon definition`);
};

export const iconFactory = (
    icon: IconFactoryIconProp,
    propDefaults: Partial<IconProps> = {}
): ReactElement | null => {
    if (isValidElement<IconProps>(icon)) {
        return cloneElement<IconProps>(icon, {
            ...propDefaults,
            className: cx(icon.props.className, propDefaults.className),
        });
    }

    if (typeof icon === 'string' || Array.isArray(icon) || isIconLookup(icon)) {
        const extractedIcon: IconProp = getIconDefintion(icon);
        return <Icon {...propDefaults} icon={extractedIcon} />;
    } else if (isIconProps(icon)) {
        const extractedIcon: IconProp = getIconDefintion(icon.icon);
        const classes: string = cx(icon.className, propDefaults.className);

        return (
            <Icon
                {...propDefaults}
                {...icon}
                icon={extractedIcon}
                className={classes}
            />
        );
    }

    return null;
};
