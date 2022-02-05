import { IconFactoryIconProp } from 'components/Icon';

export interface CardSkillsProps {
    header: string;
    icon: IconFactoryIconProp;
    skills: string[];
    inverted?: boolean;
}
