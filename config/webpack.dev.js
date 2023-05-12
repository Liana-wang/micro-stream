const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        port: 3008,
        compress: false,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        hot: false,
        'static': { // 托管静态资源文件
            directory: path.join(__dirname, '../public'),
        },
    },
    devtool: 'eval-cheap-module-source-map',
})