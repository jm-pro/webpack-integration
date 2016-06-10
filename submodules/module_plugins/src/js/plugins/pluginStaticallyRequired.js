define(function () {

    function pluginStaticallyRequired() {
    }

    pluginStaticallyRequired.prototype.sayHello = function () {
        alert("Hello from pluginStaticallyRequired");
    };

    return new pluginStaticallyRequired();

});
