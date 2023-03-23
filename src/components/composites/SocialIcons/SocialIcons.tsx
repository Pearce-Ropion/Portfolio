import { ElementRef } from 'react';
import { ComponentProps } from '@stitches/react';

import { Flex, IconButton } from 'components/foundations';
import { HTMLDiv } from 'components/foundations/Html';
import { createComponentWithRef } from 'utils/component';
import { StyledSocialIcon } from 'components/composites/SocialIcons/styles';
import { IconProp_t } from 'components/foundations/Icon/util';

const icons: Array<[string, IconProp_t]> = [
  ['Email', ['fas', 'envelope']],
  ['LinkedIn', ['fab', 'linkedin-in']],
  ['Github', ['fab', 'github']],
  ['Resume/CV', ['fas', 'file-user']],
];

export type SocialIconsElement_t = ElementRef<typeof Flex>;
export interface SocialIconsProps_t
  extends Omit<ComponentProps<typeof HTMLDiv>, 'children'> {
  direction?: 'horizontal' | 'vertical';
  inverted?: boolean;
}

export const SocialIcons = createComponentWithRef<
  SocialIconsElement_t,
  SocialIconsProps_t
>(({ direction = 'horizontal', inverted, ...rest }, forwardedRef) => {
  return (
    <Flex
      ref={forwardedRef}
      direction={direction === 'horizontal' ? 'row' : 'column'}
      {...rest}
    >
      {icons.map(([label, icon]) => (
        <StyledSocialIcon key={label} direction={direction}>
          <IconButton icon={icon} inverted={inverted} label={label} />
        </StyledSocialIcon>
      ))}
    </Flex>
  );
});

SocialIcons.defaultProps = {
  direction: 'horizontal',
};
