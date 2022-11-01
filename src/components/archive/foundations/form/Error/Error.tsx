import { FC } from 'react';
import { duotone } from '@fortawesome/fontawesome-svg-core/import.macro';

import { FormErrorProps } from 'components/form/Error';
import { Icon } from 'components/Icon';
import { Text } from 'components/Text';

import { Shorthand, toPixels } from 'utils/styles';

import { Colors } from 'styles/tokens/colors';

export const FormError: FC<FormErrorProps> = ({ children }) => (
    <Text
        css={{
            fontSize: toPixels(14),
            paddingLeft: Shorthand.paddingToEm(0.625),
            marginTop: Shorthand.marginToPx(4),
        }}
        color={Colors.red900}
    >
        <Icon
            duotone
            css={{ marginRight: Shorthand.marginToEm(0.5) }}
            icon={duotone('exclamation-triangle')}
            color={Colors.red900}
        />
        {children}
    </Text>
);
