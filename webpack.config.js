const distFolderPath = "dist",
    webpack = require('webpack'),
    Path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    packageJson = require("./package.json"),
    languages = ["en"/*, "it"*/];

module.exports = languages.map(function (lang) {

    return {
        entry: {
            app: './src/js/app.js',
            vendor: ['jquery'] //add every vendor
        },
        output: {
            path: Path.join(__dirname, distFolderPath, lang),
            //hash for long term cache
            filename: 'bundle.[hash].js',
            chunkFilename: '[id].[hash].js'
        },
        resolve: {
            root: Path.resolve(__dirname),
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
                //jshint
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
            //clean dist folder before build
            new CleanWebpackPlugin(['dist'], {
                //root: '/full/project/path',
                //verbose: true,
                //dry: false
            }),
            // vendor in a separate bundle, hash for long term cache
            new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.[hash].js", Infinity),
            // uglify
            /*  new webpack.optimize.UglifyJsPlugin({
             compress: {
             warnings: false,
             },
             output: {
             comments: false,
             },
             }),*/
            // compile index.html from template and inject hashed js
            new HtmlWebpackPlugin({
                filename: "index.html",
                inject: "body",
                template: "./index.template.html"
            }),
            // define global scoped variable, force JSON.stringify()
            new webpack.DefinePlugin({
                ENVIRONMENT: JSON.stringify("develop"),
                VERSION: JSON.stringify(packageJson.version),
                LANG : JSON.stringify(lang)
            }),
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
            reporter: function (errors) {
            }
        }
    };
});