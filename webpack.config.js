'use strict'

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: [
        './src/app.js',
        './src/styles.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.scss'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src/'),
            'fonts': path.resolve(__dirname, 'src/fonts/'),
            'images': path.resolve(__dirname, 'src/images/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: path.resolve(__dirname, 'src/'),
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    exclude: /node_modules/,
                    loaders: {
                        js: 'babel-loader',
                        scss: [
                            {
                                loader: 'vue-style-loader'
                            },
                            {
                                loader: 'css-loader'
                            },
                            {
                                loader: 'sass-loader'
                            },
                            {
                                loader: 'sass-resources-loader',
                                options: {
                                    sourceMap: true,
                                    resources: [
                                        './src/styles/vars.scss',
                                        './src/styles/mixins.scss'
                                    ]
                                }
                            }
                        ]
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.scss$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            sourceMap: true,
                            resources: [
                                './src/styles/vars.scss',
                                './src/styles/mixins.scss'
                            ]
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    esModule: false,
                    name: './images/[name].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    esModule: false,
                    name: './fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'build.css',
            chunkFilename: '[id].css'
        })
    ]
}
