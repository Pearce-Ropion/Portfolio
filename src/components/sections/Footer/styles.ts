import { SocialIcons } from 'components/composites/SocialIcons';
import { HTML } from 'components/Html';
import { styled } from 'stitches.config';

export const StyledFooter = styled(HTML.Footer, {
  paddingTop: '$15',
  paddingBottom: '$12',
});

export const StyledFooterSocialIcons = styled(SocialIcons, {
  marginBottom: '$7',
});
