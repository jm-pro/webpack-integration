
const webpack = require('webpack')
const path = require('path')
const packageJson = require("./package.json")
const distFolderPath = "dist"

//plugins
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

//configuration
const languages = ["en"/*, "it"*/]
const devMode = process.env.NODE_ENV !== 'production'


module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, distFolderPath),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [  { test: /\.(sa|sc|c)ss$/,
        //  MiniCssExtractPlugin.loader should be used only on production builds without style-loader in the loaders chain,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader , // use style-loader except in prod, use MiniCssExtractPlugin.loader
            "css-loader", // translates CSS into CommonJS
            //"sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      { test: /\.png$/,
        use: [ { loader: 'url-loader',
                 options: { mimetype: 'image/png'}
               }
             ] 
      },
      { test: /\.hbs$/, use: 'handlebars-loader' },
      // webpack 4 understands json natively
      
      { test: /underscore/, 
        use:  'exports?_' },
      { test: /backbone/, 
        use: 'exports?Backbone!imports?underscore,jquery' },
      { test: /\.(png|jpg|gif)$/i,  //inline images with size less than 30kb
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 30000
            }
          }
        ]
      }
    ]
    
  },
  
  plugins: [
   new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    
     new webpack.LoaderOptionsPlugin({
            options: {
                handlebarsLoader: {}
            }
        })
    
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\\/]node_modules[\\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  resolve: {
    // RESOLVE configures how to resolve module requests
    // (does not apply to resolving to loaders)
    
    // directories where to look for modules
    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],
    
    // extensions that are used
    extensions: [".js", ".json", ".jsx", ".css"],
    
    // a list of module name aliases
    alias: {
      //"module": "new-module",
      // alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"
      
      //"only-module$": "new-module",
      // alias "only-module" -> "new-module", but not "only-module/path/file" -> "new-module/path/file"
      
      //"module": path.resolve(__dirname, "app/third/module.js"),
      // alias "module" -> "./app/third/module.js" 
      // and "module/file" results in error
      // modules aliases are imported relative to the current context
      module : "bundle.[hash].js",
      //css: 'src/css',
      module_simple: 'js/submodules/module_simple/src',
      module_handlebars: 'js/submodules/module_handlebars/src',
      module_nls: 'js/submodules/module_nls/src',
      module_json: 'js/submodules/module_json/src',
      module_plugins: 'js/submodules/module_plugins/src',
      module_images: 'js/submodules/module_images/src',
		}	        
	}
  
}


