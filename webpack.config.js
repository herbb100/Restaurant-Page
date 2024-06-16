const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:{
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },
    optimization:{
        runtimeChunk: 'single',
    },
    devtool: 'inline-source-map',
    devServer:{
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant Page Two',
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
            
        })
    ],
    module: {
        rules: [
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
        ],
    },
}