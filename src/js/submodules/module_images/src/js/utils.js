define(["jquery"], function ($) {

    function Utils() {
    }

    Utils.prototype.sayHello = function () {
        var $greetings = $("<div class='module_simple'>Hello Module Simple!</div>");
        $('body').append($greetings);
    };

    return new Utils();

});
