System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Restaurant;
    return {
        setters:[],
        execute: function() {
            Restaurant = (function () {
                function Restaurant(id, name, addres, description, imagen, price) {
                    this.id = id;
                    this.name = name;
                    this.addres = addres;
                    this.description = description;
                    this.imagen = imagen;
                    this.price = price;
                }
                return Restaurant;
            }());
            exports_1("Restaurant", Restaurant);
        }
    }
});
//# sourceMappingURL=restaurant.js.map