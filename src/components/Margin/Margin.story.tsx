import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box } from 'components/Box';
import { Margin, MARGIN_SIZES } from 'components/Margin';

import { disablePropControls, selectControl } from 'utils/controls';

import { Colors } from 'styles/tokens/colors';

const Template: ComponentStory<typeof Margin> = args => (
    <Margin {...args}>
        <Box color={Colors.orange900} />
    </Margin>
);

export const MarginTop = Template.bind({});
MarginTop.args = {
    top: 'small',
};

MarginTop.argTypes = {
    top: selectControl(MARGIN_SIZES),
    ...disablePropControls(['bottom', 'left', 'right']),
};

MarginTop.decorators = [
    Story => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Box color={Colors.navy800} />
            <Story />
        </div>
    ),
];

export const MarginBottom = Template.bind({});
MarginBottom.args = {
    bottom: 'small',
};

MarginBottom.argTypes = {
    bottom: selectControl(MARGIN_SIZES),
    ...disablePropControls(['top', 'left', 'right']),
};

MarginBottom.decorators = [
    Story => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Story />
            <Box color={Colors.navy800} />
        </div>
    ),
];

export const MarginLeft = Template.bind({});
MarginLeft.args = {
    left: 'small',
};

MarginLeft.argTypes = {
    left: selectControl(MARGIN_SIZES),
    ...disablePropControls(['top', 'bottom', 'right']),
};

MarginLeft.decorators = [
    Story => (
        <div style={{ display: 'flex' }}>
            <Box color={Colors.navy800} />
            <Story />
        </div>
    ),
];

export const MarginRight = Template.bind({});
MarginRight.args = {
    right: 'small',
};

MarginLeft.argTypes = {
    right: selectControl(MARGIN_SIZES),
    ...disablePropControls(['top', 'bottom', 'left']),
};

MarginRight.decorators = [
    Story => (
        <div style={{ display: 'flex' }}>
            <Story />
            <Box color={Colors.navy800} />
        </div>
    ),
];

export default {
    title: 'Components/Margin',
    component: Margin,
} as ComponentMeta<typeof Margin>;
