define(["jquery"], function ($) {

    function Utils() {
    }

    Utils.prototype.sayHello = function () {
        var $greetings = $("<div class='model_2'>Hello Module 2!</div>");
        $('body').append($greetings);
    };

    return new Utils();

});
