import { ElementRef } from 'react';

import { Flex, IconButton } from 'components/foundations';
import { HTML } from 'components/Html';
import { createComponentWithRef } from 'utils/component';
import { StyledSocialIcon } from 'components/composites/SocialIcons/styles';
import { IconProp_t } from 'components/foundations/Icon';

const icons: Array<[string, IconProp_t]> = [
  ['Email', 'envelope'],
  [
    'LinkedIn',
    {
      icon: 'linkedin-in',
      variant: 'fab',
    },
  ],
  [
    'Github',
    {
      icon: 'github',
      variant: 'fab',
    },
  ],
  ['Resume/CV', 'file-user'],
];

export type SocialIconsElement_t = ElementRef<typeof Flex>;
export interface SocialIconsProps_t extends Omit<HTML.DivProps_t, 'children'> {
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
          {/* <IconButton icon={icon} isInverted={inverted} label={label} /> */}
        </StyledSocialIcon>
      ))}
    </Flex>
  );
});
