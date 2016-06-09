const webpack = require('webpack'),
    path = require('path'),
    languages = ["en", "it"];

module.exports = languages.map(function (lang) {
    return {
        entry: {
            app: './src/js/app.js',
            vendor: ['jquery']
        },
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
                'module_i18n/nls': 'submodules/module_i18n/src/nls/' + lang + "/",
                module_i18n: 'submodules/module_i18n/src',
                module_json: 'submodules/module_json/src',
            }
        },
        module: {
            //jshint
            preLoaders: [
                {
                    test: /\.js$/, // include .js files
                    exclude: /node_modules/, // exclude any and all files in the node_modules folder
                    loader: "jshint-loader"
                }
            ],
            loaders: [
                {test: /\.css$/, loader: "style!css"},
                {test: /\.hbs$/, loader: "handlebars-loader"},
                {test: /\.json$/, loader: "json-loader"},
            ]
        },

        plugins: [
            new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.min.js", Infinity),
            /*new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                },
                output: {
                    comments: false,
                },
            }),*/
        ],

        // more options in the optional jshint object
        jshint: {
            // any jshint option http://www.jshint.com/docs/options/
            // i. e.
            camelcase: true,

            // jshint errors are displayed by default as warnings
            // set emitErrors to true to display them as errors
            emitErrors: false,

            // jshint to not interrupt the compilation
            // if you want any file with jshint errors to fail
            // set failOnHint to true
            failOnHint: false,

            // custom reporter function
            reporter: function(errors) { }
        }
    };
});