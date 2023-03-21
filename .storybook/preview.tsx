import { NamedExoticComponent, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { DecoratorFn } from '@storybook/react';

// import { Example } from 'components/Example';
// import { Layout } from 'components/Layout';
import { Page } from 'components/Page';
import { StorybookProvider } from 'components/StorybookContext';
import { backgrounds } from 'utils/backgrounds';
import {
  StoryContext,
  StoryParameters,
  //   useDisablePagePadding,
  // shouldInvertPage,
} from 'utils/preview';
import { globalStyles } from 'styles/global';
import { Viewports } from 'utils/viewports';
import { AnalyticsProvider } from 'components/contexts';

import 'utils/library';

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname: string): void => {
  action('Navigate To: ')(pathname);
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'neutral0',
    values: backgrounds,
  },
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
  layout: 'centered',
};

export const decorators: DecoratorFn[] = [
  Story => {
    globalStyles();
    return (
      <StorybookProvider isStorybook>
        <AnalyticsProvider>
          <Story />
        </AnalyticsProvider>
      </StorybookProvider>
    );
  },
];
//     (Story, context: StoryContext) => {
//         // console.log(context);
//         const { name, parameters, component } = context;
//         const { description, notes, componentName } =
//             parameters as StoryParameters; // params that we've added

//         const inverted = useInvertPage(context);
//         const noHorizontalPadding = useDisablePagePadding(context);

//         let pageName: string | undefined = name;
//         let inner: ReactNode = <Story />;

//         if (component) {
//             pageName =
//                 componentName ||
//                 (component as NamedExoticComponent).displayName;
//             inner = (
//                 <Example title={name} description={notes} inverted={inverted}>
//                     <Story />
//                 </Example>
//             );
//         }

//         return (
//             <StorybookContext.Provider value={IS_STORYBOOK_PREVIEW}>
//                 <Layout>
//                     <Page
//                         title={pageName}
//                         description={description}
//                         noHorizontalPadding={noHorizontalPadding}
//                         inverted={inverted}
//                     >
//                         {inner}
//                     </Page>
//                 </Layout>
//             </StorybookContext.Provider>
//         );
//     },
// ];
