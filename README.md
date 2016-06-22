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

# Dynamic plugin load

**Current flow**

+ parse component configuration to create array of plugin paths
+ require the paths' array 
+ When require returns, load plugins' callback renders components synchronously

**Refactor required**

1. create a dummy `custom` folder for compiler
2. in the component, handle internally the core plugins and external plugins loading process with two different `require()` call:
    * `require(["module_plugins/js/plugins/" + plugin ])` automatically resolved by the component alias
    * `require(["module_plugins/js/custom/" + plugin ])` overridden in case of custom plugins

**NB:** If custom plugins are used, define in `webpack.resolve.alias` the new custom plugin folder path before the alias of the component

```javascript
{
...
    'module_plugins/js/custom': 'src/js/plugins',
    module_plugins: 'submodules/module_plugins/src',
...
}
```
