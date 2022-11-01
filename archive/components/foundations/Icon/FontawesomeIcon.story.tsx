import { FC } from 'react';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Icon } from 'components/Icon';
import { Text } from 'components/Text';

import {
    booleanControl,
    disableControl,
    radioControl,
    rangeControl,
    selectControl,
} from 'utils/controls';
import { toPixels } from 'utils/styles';

const sizes: SizeProp[] = [
    'xs',
    'sm',
    '1x',
    'lg',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x',
];

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Basic = Template.bind({});

export const WithSize: FC = () => (
    <div
        css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        }}
    >
        {sizes.map(size => (
            <div key={size}>
                <Text weight="bold">{size}</Text>
                <Icon
                    size={size}
                    icon={solid('book')}
                    css={{ marginBottom: toPixels(16) }}
                />
            </div>
        ))}
    </div>
);

export const WithInverse = Template.bind({});
WithInverse.args = {
    inverse: true,
};
WithInverse.parameters = {
    backgrounds: {
        default: 'neutral900',
    },
};

export const WithRotation = Template.bind({});
WithRotation.args = {
    rotation: 90,
};

export const WithFlip = Template.bind({});
WithFlip.args = {
    flip: 'vertical',
};

export const WithSpin = Template.bind({});
WithSpin.args = {
    spin: true,
};

export const WithPulse = Template.bind({});
WithPulse.args = {
    pulse: true,
};

export const WithTransform = Template.bind({});
WithTransform.args = {
    transform: 'shrink-6 right-6',
};
WithTransform.parameters = {
    notes: 'See [the docs](https://fontawesome.com/how-to-use/on-the-web/styling/power-transforms) for more info',
};
WithTransform.decorators = [
    Story => (
        <span style={{ border: '1px solid blue' }}>
            <Story />
        </span>
    ),
];

export default {
    title: 'Components/Icons/FontAwesomeIcon',
    component: FontAwesomeIcon,
    args: {
        icon: solid('book'),
        size: '3x',
    },
    argTypes: {
        icon: disableControl,
        inverse: booleanControl,
        spin: booleanControl,
        pulse: booleanControl,
        flip: radioControl(['vertical', 'horizontal', 'both']),
        size: selectControl(sizes),
        rotation: rangeControl({ max: 270, step: 90 }),
        transform: selectControl([
            'shrink-6 up-6',
            'shrink-6 down-6',
            'shrink-6 left-6',
            'shrink-6 right-6',
        ]),
    },
} as ComponentMeta<typeof FontAwesomeIcon>;
