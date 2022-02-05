import { LinkProps } from 'components/Link';

export interface CardProjectAction extends LinkProps {
    content: string;
    secondary?: boolean;
}

export interface CardProjectProps {
    header: string;
    description: string;
    tags?: string[];
    actions?: CardProjectAction[];
    inverted?: boolean;
}
