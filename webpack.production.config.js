'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // The entry file. All your src roots fromn here.
    entry: {
        main: path.join(__dirname, 'src/index.js'),
        vendor: ['react', 'react-router', 'react-redux', 'prop-types', 'axios']
    },
    // Where you want the output to go
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '',
        chunkFilename: '[name].[chunkhash:5].chunk.js'
    },
    plugins: [
        // webpack gives your modules and chunks ids to identify them. Webpack can vary the
        // distribution of the ids to get the smallest id length for often used ids with
        // this plugin
        new webpack.optimize.OccurenceOrderPlugin(),

        // handles creating an index.html file and injecting assets. necessary because assets
        // change name because the hash part changes. We want hash name changes to bust cache
        // on client browsers.
        new HtmlWebpackPlugin({
            template: './src/index.tpl.html',
            inject: 'body',
            filename: './index.html'
        }),
        // handles uglifying js
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        // plugin for passing in data to the js, like what NODE_ENV we are in.
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor" // 指定公共 bundle 的名字。
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                  {
                    presets:['react','es2015','stage-0'],
                    plugins:[
                        ['import', { libraryName: 'antd', style: 'css' }]
                    ],
                    cacheDirectory: true
                  }
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.(jpg|png)$/, 
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            },
        ]
    },
    postcss: [
        require('autoprefixer')
    ]
};
