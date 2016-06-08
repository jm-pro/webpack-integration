define([
    "jquery",
    "./cats"
], function ($, cats) {

    require("css/style.css");
    require("module_1/js/start");
    require("module_2/js/start");

    $('<h1>Cats</h1>').appendTo('body');
    var ul = $('<ul></ul>').appendTo('body');

    for (var i = 0; i < cats.length; i++) {
        $('<li></li>').text(cats[i]).appendTo(ul);
    }

});
