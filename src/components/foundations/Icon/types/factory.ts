import { ReactElement } from 'react';

import { IconImplProps_t, IconProps_t } from './icon';
import { IconProp_t } from './lookup';

export type IconFactoryIconProp_t = IconProp_t | ReactElement<IconProps_t>;
export interface IconFactoryIconProps_t extends Partial<IconImplProps_t> {}
