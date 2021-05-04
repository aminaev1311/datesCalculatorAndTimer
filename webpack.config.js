const { resolve } = require('path');
const { mainModule } = require('process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: resolve(__dirname, 'src', 'js', 'main.js'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
            test: /\.wav$/,
            include: resolve(__dirname, 'src', 'assets', 'sounds', 'sound3.wav'),
            loader: 'file-loader'
      }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src', 'index.html'),
        }),
        new miniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new BundleAnalyzerPlugin()
    ]
}