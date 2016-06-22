define(function () {

    function Custom() {
    }

    Custom.prototype.sayHello = function () {
        alert("Hello from Custom plugin. [new HTTP request]");
    };

    return new Custom();

});
