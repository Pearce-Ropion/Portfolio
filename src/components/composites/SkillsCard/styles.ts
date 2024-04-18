import { Card, Copy, Flex, Icon } from 'components/foundations';
import { styled } from 'stitches.config';

export const StyledSkillsCard = styled(Card, Flex.Styled);

export const StyledSkillsCardIcon = styled(Icon, {
  marginBottom: '$7',
});

export const StyledSkillsCardTitle = styled(Copy, {
  marginBottom: '$7',
});

export const StyledSkillsCardSkill = styled(Copy, {
  marginBottom: '$2',

  '&:last-of-type': {
    marginBottom: 0,
  },
});
