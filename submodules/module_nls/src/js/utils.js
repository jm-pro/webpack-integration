define([
    "jquery",
    "module_i18n/nls/labels"
], function ($, labels) {

    function Utils() {
    }

    Utils.prototype.sayHello = function () {

        var template = require("module_i18n/html/template.hbs"),
            html = template(labels);

        $('body').append(html);
    };

    return new Utils();

});
