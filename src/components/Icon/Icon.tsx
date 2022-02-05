import { memo, VFC } from 'react';

import { DuotoneIcon, IconProps, StandardIcon } from 'components/Icon';

import '@fortawesome/fontawesome-svg-core/styles.css';

export const Icon: VFC<IconProps> = memo(({ duotone, ...props }) => {
    if (duotone) {
        return <DuotoneIcon {...props} />;
    }

    return <StandardIcon {...props} />;
});
