# webpack-integration
Testing repo for webpack integration in FENIX

# `webpack.config.js`

+ Add to `resolve.alias` the alias of the nls folder of each submodules (before the submodule alias declaration)
+ Add to `resolve.alias` the base url of each FENIX submodules

# HandlebarsJS

+ remove HandlebarsJS dependency from each module
+ split grouped templates to single template: when it is used only one template for a module and it is selected a portion of it, split the single file into multiple file
+ require() the handlebar file without the text! prefix: return HandlebarsJS template fn ready to be used with a model

NB: to be investigated

# nls (i18n)

+ create the `src/nls`
+ create a folder for each language
+ edit the `webpack.config.js` to create dynamically the aliases

NB: to be investigated

# To be installed