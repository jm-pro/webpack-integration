define([
    "jquery",
    "module_plugins/js/utils"
], function ($, Utils) {

    var $staticallyRequiredButton = $("<button> Plugin statically required </button>");
    $staticallyRequiredButton.on("click", function () {
        Utils.loadPluginStaticallyRequired();
    });
    $('body').append($staticallyRequiredButton);

    var $dynamicallyRequiredInBundle = $("<button data-plugin='dynamicInBundle'> Plugin dynamic in bundle </button>");
    $dynamicallyRequiredInBundle.on("click", function (e) {
        var plugin = $(e.target).data("plugin");
        Utils.loadInBundle(plugin);
    });
    $('body').append($dynamicallyRequiredInBundle);

    var $dynamicallyRequiredNotInBundle = $("<button data-plugin='dynamicNotInBundle'> Plugin dynamic NOT in bundle </button>");
    $dynamicallyRequiredNotInBundle.on("click",  function (e) {
        var plugin = $(e.target).data("plugin");
        Utils.loadNotInBundle( plugin );
    });
    $('body').append($dynamicallyRequiredNotInBundle);

    var $dynamicallyRequiredCustom = $("<button data-plugin='custom'> Custom Plugin</button>");
    $dynamicallyRequiredCustom.on("click",  function (e) {
        var plugin = $(e.target).data("plugin");
        Utils.loadCustomPlugin( plugin );
    });
    $('body').append($dynamicallyRequiredCustom);

});
