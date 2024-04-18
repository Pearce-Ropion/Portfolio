import {
  StyledSkillsCard,
  StyledSkillsCardIcon,
  StyledSkillsCardTitle,
  StyledSkillsCardSkill,
} from 'components/composites/SkillsCard/styles';
import { Box, IconProp_t } from 'components/foundations';
import { createComponentWithRef } from 'utils/component';
import { theme } from 'stitches.config';
import { HTML } from 'components/Html';

export type SkillsCardElement_t = HTML.DivElement_t;
export interface SkillsCardProps_t extends HTML.DivProps_t {
  inverted?: boolean;
  icon: IconProp_t;
  skills: string[];
  title: string;
}

export interface SkillsCardComponents_t {
  Styled: typeof StyledSkillsCard;
}

export const SkillsCard = createComponentWithRef<
  SkillsCardElement_t,
  SkillsCardProps_t,
  SkillsCardComponents_t
>(({ icon, skills, title, ...rest }, forwardedRef) => {
  return (
    <StyledSkillsCard ref={forwardedRef} {...rest} center direction="column">
      <StyledSkillsCardIcon
        icon={icon}
        size="4x"
        primaryColor={theme.colors.navy800.computedValue}
        secondaryColor={theme.colors.navy500.computedValue}
      />
      <StyledSkillsCardTitle size="large" weight="medium">
        {title}
      </StyledSkillsCardTitle>
      <Box>
        {skills.map(skill => (
          <StyledSkillsCardSkill
            key={skill}
            align="center"
            size="small"
            weight="light"
          >
            {skill}
          </StyledSkillsCardSkill>
        ))}
      </Box>
    </StyledSkillsCard>
  );
});

SkillsCard.Styled = StyledSkillsCard;
