import path from 'path';

import { GatsbyNode } from 'gatsby';
import { uniq } from 'lodash';
import { Configuration } from 'webpack';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] =
    gatsbyContext => {
        const { actions, getConfig } = gatsbyContext;

        const gatsbyConfig = getConfig() as Configuration;

        actions.setWebpackConfig({
            resolve: {
                modules: uniq([
                    ...(gatsbyConfig.resolve?.modules || []),
                    path.resolve(__dirname, 'src'),
                    'node_modules',
                ]),

                fallback: {
                    path: require.resolve('path-browserify'),
                },
            },
        });
    };
