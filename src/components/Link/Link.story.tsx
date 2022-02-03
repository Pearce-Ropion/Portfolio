import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SITE_URL } from 'config';

import { Link } from 'components/Link';

const Template: ComponentStory<typeof Link> = args => (
    <Link {...args}>Link</Link>
);

export const Basic = Template.bind({});

export const Unstyled = Template.bind({});
Unstyled.args = {
    variant: 'unstyled',
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    variant: 'primary',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
    variant: 'secondary',
};

export const Inverted = Template.bind({});
Inverted.args = {
    inverted: true,
};

export const LinkToInternal = Template.bind({});
LinkToInternal.storyName = 'Link To (internal)';
LinkToInternal.args = {
    to: '/contact',
};

export const LinkToExternal = Template.bind({});
LinkToExternal.storyName = 'Link To (external)';
LinkToExternal.args = {
    to: SITE_URL.href,
    onClick: event => {
        event.preventDefault();
        action('Navigate To: ')(SITE_URL.href);
    },
};

export const LinkToAnchor = Template.bind({});
LinkToAnchor.storyName = 'Link To (anchor)';
LinkToAnchor.args = {
    to: '#contact',
};

export const WithAutoFocus = Template.bind({});
WithAutoFocus.args = {
    autoFocus: true,
};

export default {
    title: 'Components/Link',
    component: Link,
} as ComponentMeta<typeof Link>;
