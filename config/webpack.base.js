const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');
const babelConfig = require('./babelConfig')
const postcssConfig = require('./postcssConfig')
const { name: packageName } = require('../package')

const isDev = process.env.NODE_ENV === 'development'
const ANT_PREFIX = `${packageName}-ant`;
const ANT_ICON_PREFIX = `${packageName}-anticon`

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

const getStyleLoaders = (cssOptions) => {
    const loaders = [
        { loader: isDev ? require.resolve('style-loader') : MiniCssExtractPlugin.loader },
        {
            loader: require.resolve('css-loader'),
            options: cssOptions,
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                postcssOptions: postcssConfig,
                sourceMap: isDev,
            },
        },
    ].filter(Boolean)

    return loaders
}

module.exports = {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    output: {
        filename: 'static/js/[name].[contenthash:8].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        publicPath: '',
        library: `${packageName}-[name]`,
        libraryTarget: 'umd',
        chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                include: [path.resolve(__dirname, '../src')],
                use: [
                    'thread-loader',
                    {
                        loader: 'babel-loader',
                        options: babelConfig,
                    },
                ],
            },
            {
                test: cssRegex,
                exclude: cssModuleRegex,
                include: [path.resolve(__dirname, '../src')],
                use: getStyleLoaders({
                    importLoaders: 1,
                    sourceMap: isDev,
                    modules: {
                        mode: 'icss',
                        localIdentName: '[path][name]---[local]',
                    },
                }),
            },
            {
                test: cssModuleRegex,
                include: [path.resolve(__dirname, '../src')],
                use: getStyleLoaders({
                    importLoaders: 1,
                    sourceMap: isDev,
                    modules: {
                        mode: 'local',
                        localIdentName: '[path][name]---[local]',
                    },
                }),
            },
            {
                test: lessRegex,
                exclude: lessModuleRegex,
                use: [
                    ...getStyleLoaders({
                        importLoaders: 2,
                        sourceMap: isDev,
                        modules: {
                            mode: 'icss',
                            localIdentName: '[path][name]---[local]',
                        },
                    }),
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                                modifyVars: {
                                    '@ant-prefix': ANT_PREFIX,
                                    '@iconfont-css-prefix': ANT_ICON_PREFIX,
                                },
                            },
                        },
                    },
                ],
            },
            {
                test: lessModuleRegex,
                use: [
                    ...getStyleLoaders({
                        importLoaders: 2,
                        sourceMap: isDev,
                        modules: {
                            mode: 'local',
                            localIdentName: '[path][name]---[local]',
                        },
                    }),
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                                modifyVars: {
                                    '@ant-prefix': ANT_PREFIX,
                                    '@iconfont-css-prefix': ANT_ICON_PREFIX,
                                },
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 10kb
                    },
                },
                generator: {
                    filename: 'static/images/[name].[contenthash:6][ext]',
                },
            },
            {
                test: /\.svg$/,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    },
                },
                generator: {
                    filename: 'static/fonts/[name].[contenthash:6][ext]',
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    },
                },
                generator: {
                    filename: 'static/media/[name].[contenthash:6][ext]',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
        modules: [path.resolve(__dirname, '../node_modules')],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            inject: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            ANT_PREFIX: JSON.stringify(ANT_PREFIX),
            ANT_ICON_PREFIX: JSON.stringify(ANT_ICON_PREFIX),
            APP_NAME: JSON.stringify(packageName),
        }),
    ],
    cache: {
        type: 'filesystem',
    },
}