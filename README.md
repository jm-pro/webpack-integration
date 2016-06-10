#Getting started

1. `npm install`
2. `webpack`

This will generate the `dist` folder

# `webpack.config.js`

+ Add to `resolve.alias` the alias of the nls folder of each submodules (before the submodule alias declaration)
+ Add to `resolve.alias` the base url of each FENIX submodules

# HandlebarsJS

+ remove HandlebarsJS dependency from each module
+ split grouped templates to single template: when it is used only one template for a module and it is selected a portion of it, split the single file into multiple file
+ require() the handlebar file without the text! prefix: return HandlebarsJS template fn ready to be used with a model

# nls (i18n)

+ create the `src/nls`
+ create a folder for each language and place there the translated files
+ edit the `webpack.config.js` to create dynamically the aliases