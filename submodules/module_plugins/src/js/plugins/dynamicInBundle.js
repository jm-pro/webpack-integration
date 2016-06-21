define(function () {

    function DynamicInBundle() {
    }

    DynamicInBundle.prototype.sayHello = function () {
        alert("Hello from DynamicInBundle. [no HTTP request]");
    };

    return new DynamicInBundle();

});
