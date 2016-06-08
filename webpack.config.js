const webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js',
    },
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            css: 'src/css',
            module_1 : 'submodules/module_1/src',
            module_2 : 'submodules/module_2/src',
        }
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
}