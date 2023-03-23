import { ElementRef } from 'react';

import {
  StyledFooter,
  StyledFooterSocialIcons,
} from 'components/composites/Footer/styles';
import { Copy, Flex } from 'components/foundations';
import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';

export type FooterElement_t = ElementRef<typeof StyledFooter>;
export interface FooterProps_t
  extends Omit<OmitComponentVariantProps_t<typeof StyledFooter>, 'children'> {
  inverted?: boolean;
}

export const Footer = createComponentWithRef<FooterElement_t, FooterProps_t>(
  ({ inverted, ...rest }, forwardedRef) => {
    const now = new Date();
    return (
      <StyledFooter ref={forwardedRef} {...rest}>
        <Flex direction="column" justify="center">
          <StyledFooterSocialIcons inverted={inverted} />
          <Copy align="center" inverted={inverted} size="large" weight="light">
            @ {now.getFullYear()} Pearce Ropion
          </Copy>
        </Flex>
      </StyledFooter>
    );
  },
);
