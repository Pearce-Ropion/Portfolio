import { SocialIcons } from 'components/composites/SocialIcons';
import { HTMLFooter } from 'components/foundations/Html';
import { styled } from 'stitches.config';

export const StyledFooter = styled(HTMLFooter, {
  paddingTop: '$15',
  paddingBottom: '$12',
});

export const StyledFooterSocialIcons = styled(SocialIcons, {
  marginBottom: '$7',
});
