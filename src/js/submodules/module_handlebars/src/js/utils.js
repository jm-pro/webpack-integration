define([
    "jquery"
], function ($) {

    function Utils() {
    }

    Utils.prototype.sayHello = function () {

        var context = {greeting: "Hello from HandlebarsJS!"},
            template = require("module_handlebars/html/template.hbs"),
            html = template(context);

        $('body').append(html);
    };

    return new Utils();

});
