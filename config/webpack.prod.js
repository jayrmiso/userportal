const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;
const CopyPlugin  = require("copy-webpack-plugin");
// const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
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
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/media', to: 'media' },
        { from: 'public/favicon.ico', to: '' },
        { from: 'public/manifest.json', to: '' },
        { from: 'public/splash-screen.css', to: '' }
      ],
      options: {
        concurrency: 100,
      },
    })
  ],
};

module.exports = merge(commonConfig, prodConfig);
