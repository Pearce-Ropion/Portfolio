import {
  StyledSkillBubble,
  StyledSkillBubbleSkill,
} from 'components/composites/SkillBubble/styles';
import { HTMLDivElement_t, HTMLDivProps_t } from 'components/foundations';
import { createComponentWithRef } from 'utils/component';

export type SkillBubbleElement_t = HTMLDivElement_t;
export interface SkillBubbleProps_t extends HTMLDivProps_t {
  duotone?: boolean;
  inverted?: boolean;
  size: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
  skill: string;
  subSkill?: string;
}

export interface SkillBubbleComponents_t {
  Styled: typeof StyledSkillBubble;
}

export const SkillBubble = createComponentWithRef<
  SkillBubbleElement_t,
  SkillBubbleProps_t
>(({ skill, subSkill, ...rest }, forwardedRef) => {
  return (
    <StyledSkillBubble ref={forwardedRef} {...rest} center direction="column">
      <StyledSkillBubbleSkill align="center">{skill}</StyledSkillBubbleSkill>
      {subSkill && (
        <StyledSkillBubbleSkill align="center" size="small" weight="light">
          {subSkill}
        </StyledSkillBubbleSkill>
      )}
    </StyledSkillBubble>
  );
});
