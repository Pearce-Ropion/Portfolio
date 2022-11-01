import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
    brands,
    duotone,
    solid,
} from '@fortawesome/fontawesome-svg-core/import.macro';

import { SkillBubbleSizes } from 'components/SkillBubble';

interface Section {
    section: boolean | true;
    anchor: string;
    header: string;
}
interface HomePage {
    sectionHero: {
        title: string;
        description: string;
    };
    social: {
        [key: string]: {
            name: string;
            link: string;
            icon: IconDefinition;
            iconProps?: {
                circular?: boolean;
            };
            download?: boolean;
        };
    };
    sectionSkills: Section & {
        skills: {
            skill: string;
            subSkill?: string;
            size: typeof SkillBubbleSizes[number];
        }[];
        cards: {
            header: string;
            icon: IconDefinition;
            skills: string[];
        }[];
    };
    sectionProjects: Section & {
        projects: {
            header: string;
            description: string;
            tags?: string[];
            actions?: {
                content: string;
                to: string;
                secondary?: boolean;
            }[];
        }[];
    };
    sectionContact: Section;
}

export const HomePageData: HomePage = {
    sectionHero: {
        title: "Hi, I'm Pearce Ropion",
        description:
            'A creative front-end developer with a mind for compelling designs to create web applications that are stunning, both visually and functionally.',
    },
    social: {
        email: {
            name: 'Email',
            link: 'mailto:pearce.ropion@me.com',
            icon: solid('envelope'),
        },
        linkedin: {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/pearce-ropion/',
            icon: brands('linkedin-in'),
        },
        github: {
            name: 'Github',
            link: 'https://github.com/Pearce-Ropion',
            icon: brands('github'),
            iconProps: {
                circular: true,
            },
        },
        resume: {
            name: 'Resume',
            link: '',
            icon: solid('memo'),
            download: true,
        },
    },
    sectionSkills: {
        section: true,
        anchor: 'Skills',
        header: 'Skills',
        skills: [
            {
                skill: 'Javascript',
                subSkill: 'ES2020',
                size: 'large-x',
            },
            {
                skill: 'Typescript',
                subSkill: 'ES2020',
                size: 'large-x',
            },
            {
                skill: 'React',
                size: 'large-x',
            },
            {
                skill: 'NodeJS',
                size: 'large',
            },
            {
                skill: 'Python',
                subSkill: '3.6',
                size: 'medium',
            },
            {
                skill: 'Ruby',
                size: 'small',
            },
            {
                skill: 'Angular',
                size: 'small',
            },
            {
                skill: 'Vue',
                size: 'small-x',
            },
            {
                skill: 'SQL',
                size: 'small-x',
            },
        ],
        cards: [
            {
                header: 'Design Software',
                icon: duotone('paintbrush-pencil'),
                skills: [
                    'Adobe InDesign',
                    'Adobe Illustrator',
                    'Adobe Photoshop',
                    'Figma',
                    'Sketch',
                ],
            },
            {
                header: 'Tools',
                icon: duotone('cogs'),
                skills: ['Git', 'Jira', 'RestAPI', 'Webpack', 'Unit Testing'],
            },
            {
                header: 'Knowledge',
                icon: duotone('code-merge'),
                skills: [
                    'SEO',
                    'Usability',
                    'Typography',
                    'Mobile First',
                    'User Experience',
                ],
            },
        ],
    },
    sectionProjects: {
        section: true,
        anchor: 'Projects',
        header: 'Projects',
        projects: [
            {
                header: 'CREEC',
                description:
                    'CREEC (Carbon in Riparian Ecosystems Estimator for California) is a web app built for Californian ecologists to estimate how much carbon is available in a geographic location based on numerous parameters. It is built using JQuery/JQueryUI elements using a PHP backend. The app is designed for the Californian Department of Conservation (DOC) and was built in conjunction with a professor at Santa Clara University. The site was later resigned by engineers at the DOC to be compliant with their ASP.net Core tech stack.',
                tags: [
                    'HTML5',
                    'CSS3',
                    'Javascript',
                    'JQuery',
                    'JQueryUI',
                    'PHP',
                    'MySQL',
                    'SQLite3',
                ],
                actions: [
                    {
                        content: 'View Demo',
                        to: 'https://github.com/Pearce-Ropion/creec',
                    },
                    {
                        content: 'View Code',
                        secondary: true,
                        to: 'https://github.com/Pearce-Ropion/creec',
                    },
                    {
                        content: 'Publication',
                        secondary: true,
                        to: 'https://github.com/Pearce-Ropion/creec',
                    },
                ],
            },
            {
                header: 'Brefilion EDU Camps',
                description:
                    'Brefilion EDU Camps is a fictional summer and winter break education camp. This site is the product of a class project in which I lead a team of 4 developers. Everything was built from scratch using a combination of vanilla JavaScript, HTML5, CSS3, PHP5, and MySQL. The site includes an eCommerce portal, registration forms, a forum, and a photo gallery page.',
                tags: ['HTML5', 'CSS3', 'Javascript', 'JQuery', 'PHP', 'MySQL'],
                actions: [
                    {
                        content: 'View Demo',
                        to: 'https://github.com/Pearce-Ropion/educamps',
                    },
                    {
                        content: 'View Code',
                        secondary: true,
                        to: 'https://github.com/Pearce-Ropion/educamps',
                    },
                ],
            },
            {
                header: 'Shelley Golden Style',
                description:
                    "Shelley Golden Style is a WordPress website built for a small startup entrepreneur in my area. The site aims at drawing customers with its sleek, modern design. This was my first foray into building a website that was easily editable and could endure through many iterations. There isn't much custom code here as it uses mostly pre-built WordPress themes however, this was my attempt at making a beautiful and artsy, yet functional website.",
                tags: ['Wordpress', 'CSS3', 'Javascript', 'UI', 'UX'],
                actions: [
                    {
                        content: 'Live',
                        to: 'https://shelleygoldenstyle.com/',
                    },
                ],
            },
        ],
    },
    sectionContact: {
        section: true,
        anchor: 'Contact Me',
        header: 'Get In Touch',
    },
};
