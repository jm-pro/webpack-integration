define(function () {

    function pluginDynamicallyRequiredInBundle() {
    }

    pluginDynamicallyRequiredInBundle.prototype.sayHello = function () {
        alert("Hello from pluginDynamicallyRequiredInBundle. [no HTTP request]");
    };

    return new pluginDynamicallyRequiredInBundle();

});
