define([
    "jquery",
    "./cats"
], function ($, cats) {

    function App(){
        require("css/style.css");
        require("module_simple/js/start");
        require("module_handlebars/js/start");
        require("module_nls/js/start");
        require("module_json/js/start");
        require("module_plugins/js/start");
        require("module_images/js/start");

        $('<h1>Cats</h1>').appendTo('body');
        var ul = $('<ul></ul>').appendTo('body');

        this.cats = cats;

        for (var i = 0; i <  this.cats.length; i++) {
            $('<li></li>').text( this.cats[i]).appendTo(ul);
        }

        $('<p>Is dev: ' + !!__DEVELOPMENT__ + '</p>').appendTo('body');
        $('<p>Version: ' + VERSION + '</p>').appendTo('body');
        $('<p>Language: ' + LANG+ '</p>').appendTo('body');
    }

    App.prototype.getCats = function () {
        return  this.cats;
    };

    return new App();

});
