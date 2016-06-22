define(function () {

    function DynamicNotInBundle() {
    }

    DynamicNotInBundle.prototype.sayHello = function () {
        alert("Hello from DynamicNotInBundle. [new HTTP request]");
    };

    return new DynamicNotInBundle();

});
