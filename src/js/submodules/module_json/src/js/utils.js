define([
    "jquery",
    "module_json/json/config.json"
], function ($, C) {

    function Utils() {
    }

    Utils.prototype.sayHello = function () {
        var $greetings = $("<div class='module_json'>" + C.greeting +"</div>");
        $('body').append($greetings);
    };

    return new Utils();

});
