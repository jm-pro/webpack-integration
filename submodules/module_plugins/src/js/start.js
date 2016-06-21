define([
    "jquery",
    "module_plugins/js/utils"
], function ($, Utils) {

    var pluginsPath = "module_plugins/js/plugins/";

    var $pluginStaticallyRequiredButton = $("<button> Plugin statically required </button>");
    $pluginStaticallyRequiredButton.on("click", function () {
        Utils.loadPluginStaticallyRequired();
    });
    $('body').append($pluginStaticallyRequiredButton);

    var $pluginDynamicallyRequiredInBundle = $("<button data-plugin='dynamicInBundle'> Plugin dynamic in bundle </button>");
    $pluginDynamicallyRequiredInBundle.on("click", function (e) {
        var plugin = $(e.target).data("plugin");
        Utils.loadInBundle(pluginsPath + plugin);
    });
    $('body').append($pluginDynamicallyRequiredInBundle);

    var $pluginDynamicallyRequiredNotInBundle = $("<button data-plugin='dynamicNotInBundle'> Plugin dynamic NOT in bundle </button>");
    $pluginDynamicallyRequiredNotInBundle.on("click",  function (e) {
        var plugin = $(e.target).data("plugin");
        Utils.loadNotInBundle( plugin );
    });
    $('body').append($pluginDynamicallyRequiredNotInBundle);

});
