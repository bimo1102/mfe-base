//webpack.common.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { container } = require('webpack');
const ExternalRemotesPlugin = require('external-remotes-plugin');
const DotEnvWebpackPlugin = require('dotenv-webpack');
const WebpackShared = require('./../share-system-fe/tools/webpack.share');
const federationConfig = require('./federation.config');
module.exports = {
    name: 'general-react-system-fe',

    entry: './src/index.tsx',

    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            '@share-system-fe': path.resolve(__dirname, './../share-system-fe'),
            '@shareds': path.resolve(__dirname, './src/app/shareds'),
            '@modules': path.resolve(__dirname, './src/app/modules'),
            '@routing': path.resolve(__dirname, './src/app/routing'),
            '@app': path.resolve(__dirname, './src/app'),
            '@': path.resolve(__dirname, './src'),
        },
        modules: [path.resolve(__dirname, 'node_modules')],
    },

    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' }),

        new DotEnvWebpackPlugin({
            allowEmptyValues: true,
            prefix: 'process.env.',
            path: path.resolve(__dirname, './.env.development'), // overridden by dev/prod configs
        }),

        new container.ModuleFederationPlugin({
            name: federationConfig.moduleName,
            filename: 'remoteEntry.js',
            remotes: federationConfig.remotes,
            exposes: federationConfig.exposes,
            shared: WebpackShared.CommonSharedLibrary({ eager: true }),
        }),

        new ExternalRemotesPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.(tsx|ts|jsx|js|mjs)$/i,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env'],
                            ['@babel/preset-typescript'],
                            ['@babel/preset-react', { runtime: 'automatic' }],
                        ],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
                exclude: [/node_modules/, path.resolve(__dirname, './../share-system-fe/external-libs')],
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext][query]',
                },
            },
        ],
    },
};
