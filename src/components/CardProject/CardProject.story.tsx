import { duotone } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardProject } from 'components/CardProject';

const Template: ComponentStory<typeof CardProject> = args => (
    <CardProject {...args} />
);

export const Basic = Template.bind({});

export const Inverted = Template.bind({});
Inverted.args = {
    inverted: true,
};
Inverted.parameters = {
    backgrounds: {
        default: 'neutral900',
    },
};

export default {
    title: 'Content/CardProject',
    component: CardProject,
    args: {
        header: '01. CREEC',
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
} as ComponentMeta<typeof CardProject>;
