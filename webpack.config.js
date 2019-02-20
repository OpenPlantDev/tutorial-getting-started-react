const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:4000', 
            'webpack/hot/only-dev-server',
            './src/App.tsx'    
        ],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    devServer: {
        port: '4000',
        // Change it if other port needs to be used
        hot: true,
        // enable HMR on the server
        noInfo: false,
        quiet: false,
        // minimize the output to terminal.
        contentBase: path.resolve(__dirname, 'src'),
        // match the output path
        publicPath: '/'
        // match the output `publicPath`
    },   
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: [path.resolve(__dirname, "node_modules")],   
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        ],

    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
        new webpack.HotModuleReplacementPlugin()
    ]
}