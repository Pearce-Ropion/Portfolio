import { action } from '@storybook/addon-actions';
import { DecoratorFn } from '@storybook/react';

import 'utils/colord';
import 'utils/library';

import { Page } from 'components/Page';
import {
  AnalyticsProvider,
  StorybookProvider,
  StoryContext_t,
} from 'components/contexts';
import { backgroundsParameter } from 'utils/backgrounds';
import { globalStyles as globalStorybookStyles } from 'utils/styles';
import { globalStyles } from 'styles/global';
import { Viewports } from 'utils/viewports';

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname: string): void => {
  action('Navigate To: ')(pathname);
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: backgroundsParameter,
  controls: {
    exclude: ['as', 'css', 'ref'],
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    sort: 'alpha',
  },
  viewport: {
    viewports: Viewports,
  },
  // layout: 'centered',
};

export const decorators: DecoratorFn[] = [
  (Story, context) => {
    globalStyles();
    globalStorybookStyles();
    return (
      <StorybookProvider
        isStorybook
        context={context as unknown as StoryContext_t}
      >
        <AnalyticsProvider>
          <Page>
            <Story />
          </Page>
        </AnalyticsProvider>
      </StorybookProvider>
    );
  },
];
