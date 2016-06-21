define(function () {

    function Static() {
    }

    Static.prototype.sayHello = function () {
        alert("Hello from Static plugin");
    };

    return new Static();

});
