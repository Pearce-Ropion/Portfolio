import { NamedExoticComponent, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { DecoratorFn } from '@storybook/react';

import { Example } from 'components/Example';
import { Layout } from 'components/Layout';
import { Page } from 'components/Page';
import { StorybookContext } from 'components/StorybookContext';

import { Backgrounds } from 'utils/backgrounds';
import {
    StoryContext,
    StoryParameters,
    useDisablePagePadding,
    useInvertPage,
} from 'utils/preview';
import { Viewports } from 'utils/viewports';

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname: string): void => {
    action('Navigate To: ')(pathname);
};

const IS_STORYBOOK_PREVIEW = true;

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
        default: 'neutral0',
        values: Backgrounds,
    },
    controls: {
        expanded: true,
        hideNoControlsWarning: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: {
        viewports: Viewports,
    },
};

export const decorators: DecoratorFn[] = [
    (Story, context: StoryContext) => {
        // console.log(context);
        const { name, parameters, component } = context;
        const { description, notes, componentName } =
            parameters as StoryParameters; // params that we've added

        const inverted = useInvertPage(context);
        const noHorizontalPadding = useDisablePagePadding(context);

        let pageName: string | undefined = name;
        let inner: ReactNode = <Story />;

        if (component) {
            pageName =
                componentName ||
                (component as NamedExoticComponent).displayName;
            inner = (
                <Example title={name} description={notes} inverted={inverted}>
                    <Story />
                </Example>
            );
        }

        return (
            <StorybookContext.Provider value={IS_STORYBOOK_PREVIEW}>
                <Layout>
                    <Page
                        title={pageName}
                        description={description}
                        noHorizontalPadding={noHorizontalPadding}
                        inverted={inverted}
                    >
                        {inner}
                    </Page>
                </Layout>
            </StorybookContext.Provider>
        );
    },
];
