import { ElementRef, useEffect, useState } from 'react';

import {
  StyledFooter,
  StyledFooterSocialIcons,
} from 'components/sections/Footer/styles';
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
    const [date, setDate] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setDate(state => {
          const next = new Date();
          return state.getFullYear() === next.getFullYear() ? state : next;
        });
      }, 1000 * 60 * 60 * 24); // 24 hours

      return () => {
        clearInterval(intervalId);
      };
    }, []);

    return (
      <StyledFooter ref={forwardedRef} {...rest}>
        <Flex direction="column" justify="center">
          <StyledFooterSocialIcons inverted={inverted} />
          <Copy
            align="center"
            isInverted={inverted}
            size="large"
            weight="light"
          >
            @ {date.getFullYear()} Pearce Ropion
          </Copy>
        </Flex>
      </StyledFooter>
    );
  },
);
