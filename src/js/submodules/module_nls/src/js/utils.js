define([
    "jquery",
    "module_nls/nls/labels"
], function ($, labels) {

    function Utils() {
    }

    Utils.prototype.sayHello = function () {

        var template = require("module_nls/html/template.hbs"),
            html = template(labels);

        $('body').append(html);
    };

    return new Utils();

});
