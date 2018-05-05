const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
    },
    entry: [
        path.resolve(__dirname, './src/index.js'),
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
            inject: true,
        }),

    ],
    module: {
        rules: [
            { test: /\.js?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
        ],
    },
}
