const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../package.json').dependencies;

const devConfig = {
    entry: './src/index.ts',
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    output: {
        publicPath: 'http://localhost:3000/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'userportal',
            filename: 'remoteEntry.js',
            library: { type: 'var', name: 'userportal' },
            remotes: {
                // "testapp": "testapp",
                // "dashboard": "dashboard",
                // "userportal": "userportal",
                // "marketing": "marketing",
                // "host": "host",
                // "gatsbyhost": "gatsbyhost"
            },
            exposes: {
                './style': './src/assets/sass/style.scss',
                './reactstyle': './src/assets/sass/style.react.scss'
            },
            shared: {
                ...deps,
                react: { singleton: true, eager: true, requiredVersion: deps.react },
                'react-dom': {
                    singleton: true,
                    eager: true,
                    requiredVersion: deps['react-dom'],
                },
            },
        })
    ],
};

module.exports = merge(commonConfig, devConfig)