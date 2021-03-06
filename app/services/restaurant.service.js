System.register(["angular2/core", "angular2/http", "rxjs/add/operator/map"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var RestaurantService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            RestaurantService = (function () {
                function RestaurantService(http) {
                    this.http = http;
                }
                RestaurantService.prototype.getRestaurants = function () {
                    return this.http
                        .get("http://localhost/slim/restaurantes-api.php/restaurantes")
                        .map(function (res) { return res.json(); });
                };
                RestaurantService.prototype.getRestaurant = function (id, random) {
                    if (random === void 0) { random = null; }
                    if (random == null) {
                        return this.http
                            .get("http://localhost/slim/restaurantes-api.php/restaurante/" + id)
                            .map(function (res) { return res.json(); });
                    }
                    else {
                        return this.http
                            .get("http://localhost/slim/restaurantes-api.php/random-restaurante")
                            .map(function (res) { return res.json(); });
                    }
                };
                RestaurantService.prototype.addRestaurant = function (restaurant) {
                    var json = JSON.stringify(restaurant);
                    var newJson = json.replace('"name"', '"nombre"');
                    newJson = newJson.replace('"address"', '"direccion"');
                    newJson = newJson.replace('"description"', '"descripcion"');
                    newJson = newJson.replace('"price"', '"precio"');
                    var params = "json=" + newJson;
                    var headers = new http_1.Headers({ "Content-Type": "application/x-www-form-urlencoded" });
                    return this.http
                        .post("http://localhost/slim/restaurantes-api.php/restaurantes", params, { headers: headers }).map(function (res) { return res.json(); });
                };
                RestaurantService.prototype.editRestaurant = function (id, restaurant) {
                    var json = JSON.stringify(restaurant);
                    var newJson = json.replace('"name"', '"nombre"');
                    newJson = newJson.replace('"address"', '"direccion"');
                    newJson = newJson.replace('"description"', '"descripcion"');
                    newJson = newJson.replace('"price"', '"precio"');
                    var params = "json=" + newJson;
                    var headers = new http_1.Headers({ "Content-Type": "application/x-www-form-urlencoded" });
                    return this.http
                        .post("http://localhost/slim/restaurantes-api.php/update-restaurante/" + id, params, { headers: headers }).map(function (res) { return res.json(); });
                };
                RestaurantService.prototype.deleteRestaurant = function (id) {
                    return this.http
                        .get("http://localhost/slim/restaurantes-api.php/delete-restaurante/" + id)
                        .map(function (res) { return res.json(); });
                };
                RestaurantService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RestaurantService);
                return RestaurantService;
            }());
            exports_1("RestaurantService", RestaurantService);
        }
    }
});
//# sourceMappingURL=restaurant.service.js.map