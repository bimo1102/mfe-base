// webpack.dev.js
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-source-map',
    devServer: {
        host: '0.0.0.0',
        port: 4400,
        allowedHosts: 'all',
        hot: true,
        historyApiFallback: true,
        static: [
            { directory: path.resolve(__dirname, './src/modules'), publicPath: '/' },
            { directory: path.resolve(__dirname, './../share-system-fe/plugins'), publicPath: '/assets/plugins' },
            { directory: path.resolve(__dirname, './public/media'), publicPath: '/media' },
        ],
    },
    output: {
        publicPath: 'auto',
        filename: '[name].bundle.js',
        chunkFilename: 'js/chunks/[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            url: true,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
});
