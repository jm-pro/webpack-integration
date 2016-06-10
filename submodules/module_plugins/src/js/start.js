define([
    "jquery",
    "module_plugins/js/utils"
], function ($, Utils) {

    var $pluginStaticallyRequiredButton = $("<button> Plugin statically required </button>");
    $pluginStaticallyRequiredButton.on("click", function () {
        Utils.loadPluginStaticallyRequired();
    });
    $('body').append($pluginStaticallyRequiredButton);

    var $pluginDynamicallyRequiredInBundle = $("<button data-plugin='pluginDynamicallyRequiredInBundle'> Plugin dynamic in bundle </button>");
    $pluginDynamicallyRequiredInBundle.on("click", function (e) {
        var plugin = $(e.target).data("plugin");
        Utils.loadInBundle(plugin);
    });
    $('body').append($pluginDynamicallyRequiredInBundle);

    var $pluginDynamicallyRequiredNotInBundle = $("<button data-plugin='pluginDynamicallyRequiredNotInBundle'> Plugin dynamic NOT in bundle </button>");
    $pluginDynamicallyRequiredNotInBundle.on("click",  function (e) {
        var plugin = $(e.target).data("plugin");
        Utils.loadNotInBundle(plugin);
    });
    $('body').append($pluginDynamicallyRequiredNotInBundle);

});
