import { CardProps } from 'components/Card';
import { LinkProps } from 'components/Link';

export interface CardProjectAction extends LinkProps {
    content: string;
    secondary?: boolean;
}

export interface CardProjectProps extends CardProps {
    header: string;
    description: string;
    tags?: string[];
    actions?: CardProjectAction[];
    inverted?: boolean;
}
