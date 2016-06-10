define(function () {

    function pluginDynamicallyRequiredNotInBundle() {
    }

    pluginDynamicallyRequiredNotInBundle.prototype.sayHello = function () {
        alert("Hello from pluginDynamicallyRequiredNotInBundle. [new HTTP request]");
    };

    return new pluginDynamicallyRequiredNotInBundle();

});
