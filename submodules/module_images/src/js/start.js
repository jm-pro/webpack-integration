define([
    "jquery"
], function ($) {

    require("module_images/css/style.css");

    var template = require("module_images/html/template.hbs"),
        html = template();

    $('body').append(html);
});
