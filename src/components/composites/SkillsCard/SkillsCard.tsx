import { ElementRef } from 'react';

import {
  StyledSkillsCard,
  StyledSkillsCardIcon,
  StyledSkillsCardTitle,
  StyledSkillsCardSkill,
} from 'components/composites/SkillsCard/styles';
import { Box, HTMLDivProps_t, IconProp_t } from 'components/foundations';
import { createComponentWithRef } from 'utils/component';
import { theme } from 'stitches.config';

export type SkillsCardElement_t = ElementRef<typeof StyledSkillsCard>;
export interface SkillsCardProps_t extends HTMLDivProps_t {
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
        prefix="fad"
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
