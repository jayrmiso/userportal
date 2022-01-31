const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;
const webpack = require('webpack')
module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    output: {
        publicPath: 'http://localhost:3000/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'userportal',
            filename: 'remoteEntry.js',
            library: { type: 'var', name: 'userportal' },
            remotes: {
                "testapp": "testapp",
                "dashboard": "dashboard",
                "userportal": "userportal"
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
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
};