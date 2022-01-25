const path = require('path');

const _ = require('lodash');

exports.onCreateWebpackConfig = gatsbyContext => {
    const { actions, getConfig } = gatsbyContext;

    const gatsbyConfig = getConfig();

    actions.setWebpackConfig({
        resolve: {
            modules: _.uniq([
                ...(gatsbyConfig.resolve.modules || []),
                path.resolve(__dirname, 'src'),
                'node_modules',
            ]),

            fallback: {
                path: require.resolve('path-browserify'),
            },
        },
    });
};
