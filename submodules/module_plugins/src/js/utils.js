define(function () {

    function Utils() {
    }

    Utils.prototype.loadPluginStaticallyRequired = function () {

        require("module_plugins/js/plugins/pluginStaticallyRequired").sayHello();
    };

    Utils.prototype.loadInBundle = function (plugin) {

        var plugin = "module_plugins/js/plugins/" + plugin;

        console.log(plugin);

        /*require(pluginNotInBundle, function (Plugin) {
         Plugin.sayHello();
         })*/
    };

    Utils.prototype.loadNotInBundle = function (plugin) {

        var plugin = "module_plugins/js/plugins/" + plugin;

        console.log(plugin);

        /*require([pluginNotInBundle], function (Plugin) {
         Plugin.sayHello();
         })*/
    };

    return new Utils();

});
