import { CardProps } from 'components/Card';
import { IconFactoryIconProp } from 'components/Icon';

export interface CardSkillsProps extends CardProps {
    header: string;
    icon: IconFactoryIconProp;
    skills: string[];
    inverted?: boolean;
}
