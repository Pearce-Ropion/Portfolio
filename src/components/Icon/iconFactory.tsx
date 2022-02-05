import { cloneElement, isValidElement, ReactElement } from 'react';
import { cx } from '@emotion/css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { Icon, IconProps } from 'components/Icon';

export type IconFactoryIconProp = IconDefinition | ReactElement<IconProps>;

export const iconFactory = (
    icon: IconFactoryIconProp,
    propDefaults: Partial<IconProps> = {}
): ReactElement => {
    if (isValidElement<IconProps>(icon)) {
        return cloneElement<IconProps>(icon, {
            ...propDefaults,
            ...icon.props,
            className: cx(propDefaults.className, icon.props.className),
        });
    }

    return (
        <Icon icon={icon} duotone={icon.prefix === 'fad'} {...propDefaults} />
    );
};
