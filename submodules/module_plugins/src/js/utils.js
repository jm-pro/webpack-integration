define(function () {

    function Utils() {
    }

    Utils.prototype.loadPluginStaticallyRequired = function () {

        require("module_plugins/js/plugins_in_bundle/static").sayHello();
    };

    Utils.prototype.loadInBundle = function (plugin) {

        //make use of a fn that it is interpreted as regex
        this.getPluginInBundle(plugin).sayHello();
    };

    Utils.prototype.getPluginInBundle = function (plugin) {
        return require("module_plugins/js/plugins_in_bundle/" + plugin);
    };

    Utils.prototype.loadNotInBundle = function (plugin) {

        require(["module_plugins/js/plugins_not_in_bundle/" + plugin], function (Plugin) {
            Plugin.sayHello();
        });
    };

    Utils.prototype.loadCustomPlugin = function (plugin) {

        require(["module_plugins/js/custom/" + plugin], function (Plugin) {
            Plugin.sayHello();
        });
    };

    return new Utils();

});
