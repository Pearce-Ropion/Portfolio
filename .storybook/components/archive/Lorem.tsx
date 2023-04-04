import { memo } from 'react';
import { loremIpsum } from 'react-lorem-ipsum';

import { Copy, CopyProps_t } from 'components';

export interface LoremProps extends CopyProps_t {
  options?: Parameters<typeof loremIpsum>[0];
}

export const Lorem = memo<LoremProps>(({ options, ...rest }) => {
  return <Copy {...rest}>{loremIpsum(options)}</Copy>;
});
