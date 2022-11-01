import { DetailedHTMLProps, HTMLAttributes } from 'react';

export const SkillBubbleSizes = [
    'small-x',
    'small',
    'medium',
    'large',
    'large-x',
] as const;

export type SkillBubbleElement = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface SkillBubbleProps extends SkillBubbleElement {
    skill: string;
    subSkill?: string;
    size: typeof SkillBubbleSizes[number];
    bordered?: boolean;
    inverted?: boolean;
}
