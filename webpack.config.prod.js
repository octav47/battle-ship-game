const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const path = require('path')

module.exports = {
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
        alias: {
            Styles: path.resolve(__dirname, './src/styles'),
            Components: path.resolve(__dirname, './src/components'),
            Containers: path.resolve(__dirname, './src/containers'),
            Consts: path.resolve(__dirname, './src/consts'),
            Actions: path.resolve(__dirname, './src/actions'),
            Reducers: path.resolve(__dirname, './src/reducers'),
            Utils: path.resolve(__dirname, './src/utils'),
        },
    },
    entry: [
        './src/webpack-public-path',
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, './src/index.js'),
    ],
    devtool: 'eval-source-map',
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: './',
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEV__: false,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
            inject: true,
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true,
            noInfo: true, // set to false to see a list of every file being bundled.
            options: {
                sassLoader: {
                    includePaths: [path.resolve(__dirname, 'src', 'scss')],
                },
                context: '/',
                postcss: () => [autoprefixer],
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
            {
                test: /\.(css|scss|sass)$/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader?sourceMap',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[hash:base64:5]',
                            camelCase: true,
                            minimize: false,
                        },
                    },
                    'postcss-loader',
                    'sass-loader?sourceMap',
                ],
            },
        ],
    },
}
