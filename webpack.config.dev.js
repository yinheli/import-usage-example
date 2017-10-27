'use strict'

/**
 * @author yinheli
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: __dirname,
    entry: {
        '02.app': ['./dev-client', './src/app']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.css', '.less'],
        alias: {
            '@': './components'
        }
    },
    devtool: '#cheap-module-eval-source-map',
    devServer: {
        port: process.env.port || 9000,
        stats: {
            color: true,
            modules: false,
            performance: false
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                loader: 'eslint-loader',
                enforce: 'pre'
            },
            {
                test: /\.vue$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                loader: 'vue-loader'
            },
            {
                test: /\.(js)$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|woff|woff2)(\?.*|$)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 16384
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|ogg|ttf|eot|svg)(\?.*|$)/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        // new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['01.vendor', 'runtime'],
            chunks: ['02.app'],
            minChunks(module) {
                return module.context && module.context.indexOf('node_modules') !== -1
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            inject: true,
            chunksSortMode(a, b) {
                return a.names[0].localeCompare(b.names[0])
            },
            minify: {
                collapseWhitespace: true
            }
        })
    ]
}
