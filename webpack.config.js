const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

module.exports = {
    entry: './ClientApp/jsx/index.tsx',
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.scss'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot/scripts'),
        filename: 'appBundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [/ClientApp/, /src/],
                use: 'awesome-typescript-loader?silent=true'
            },
            {
                test: /\.jsx?$/,
                include: /ClientApp/,
                use: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                include: /ClientApp\/scss/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader']})
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('../css/site.css')
    ]
}