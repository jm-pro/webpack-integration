define(["jquery"], function ($) {

    function Utils() {
    }

    Utils.prototype.sayHello = function () {
        var $greetings = $("<div class='model_1'>Hello Module 1!</div>");
        $('body').append($greetings);
    };

    return new Utils();

});
