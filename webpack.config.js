const webpack = require('webpack'),
    path = require('path'),
    I18nPlugin = require("i18n-webpack-plugin"),
    languages = ["en", "it"];

module.exports = languages.map(function (lang) {
    return {
        entry: './src/js/app.js',
        output: {
            path: './bin',
            filename: lang + '.app.min.js',
        },
        resolve: {
            root: path.resolve(__dirname),
            alias: {
                css: 'src/css',
                module_simple: 'submodules/module_simple/src',
                module_handlebars: 'submodules/module_handlebars/src',
                module_handlebars_i18n: 'submodules/module_handlebars_i18n/src',
                'module_i18n/nls': 'submodules/module_i18n/src/nls/' + lang + "/",
                module_i18n: 'submodules/module_i18n/src',
            }
        },
        module: {
            loaders: [
                {test: /\.css$/, loader: "style!css"},
                {test: /\.hbs$/, loader: "handlebars-loader"}
            ]
        },

        plugins: [
            new I18nPlugin(languages[lang]),
            /*        new webpack.optimize.UglifyJsPlugin({
             compress: {
             warnings: false,
             },
             output: {
             comments: false,
             },
             }),*/
        ],

        //Needed by Handlebars
        node: {
            fs: "empty"
        }
    };
});