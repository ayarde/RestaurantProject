System.register(["angular2/core", "angular2/router", "../services/restaurant.service", "../model/restaurant"], function(exports_1, context_1) {
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
    var core_1, router_1, restaurant_service_1, restaurant_1;
    var RestaurantEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (restaurant_service_1_1) {
                restaurant_service_1 = restaurant_service_1_1;
            },
            function (restaurant_1_1) {
                restaurant_1 = restaurant_1_1;
            }],
        execute: function() {
            RestaurantEditComponent = (function () {
                function RestaurantEditComponent(restaurantService, routeParams, router) {
                    this.restaurantService = restaurantService;
                    this.routeParams = routeParams;
                    this.router = router;
                    this.title = "Edit Restaurant";
                }
                RestaurantEditComponent.prototype.onSubmit = function () {
                    var _this = this;
                    var id = this.routeParams.get("id");
                    this.restaurantService.editRestaurant(id, this.restaurant).subscribe(function (response) {
                        _this.status = response.status;
                        if (_this.status !== "success") {
                            alert("Error in Server");
                        }
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                            alert("Error in the request");
                        }
                    });
                    this.router.navigate(["Home"]);
                };
                RestaurantEditComponent.prototype.ngOnInit = function () {
                    this.restaurant = new restaurant_1.Restaurant(parseInt(this.routeParams.get("id")), this.routeParams.get("nombre"), this.routeParams.get("direccion"), this.routeParams.get("descripcion"), "null", this.routeParams.get("precio"));
                    this.getRestaurant();
                };
                RestaurantEditComponent.prototype.getRestaurant = function () {
                    var _this = this;
                    var id = this.routeParams.get("id");
                    this.restaurantService.getRestaurant(id).subscribe(function (response) {
                        _this.restaurant = response.data;
                        _this.status = response.status;
                        if (_this.status !== "success") {
                            _this.router.navigate(["Home"]);
                        }
                    }, function (error) {
                        console.log("Hello");
                        _this.errorMessage = error;
                        console.log(_this.errorMessage);
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                            alert("Error in the request");
                        }
                    });
                };
                RestaurantEditComponent.prototype.callPrice = function (value) {
                    this.restaurant.price = value;
                };
                RestaurantEditComponent.prototype.fileChangeEvent = function (fileInput) {
                    var _this = this;
                    this.filesToUpload = fileInput.target.files;
                    this.makeFileRequest("http://localhost/slim/restaurantes-api.php/upload-file", [], this.filesToUpload).then(function (result) {
                        _this.resultUpload = result;
                        _this.restaurant.imagen = _this.resultUpload.filename;
                        //console.log(result.filename);
                    }, function (error) {
                        console.log(error);
                    });
                };
                RestaurantEditComponent.prototype.makeFileRequest = function (url, params, files) {
                    return new Promise(function (resolve, reject) {
                        var formData = new FormData();
                        var xhr = new XMLHttpRequest();
                        for (var i = 0; i < files.length; i++) {
                            formData.append("uploads[]", files[i], files[i].name);
                        }
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4) {
                                if (xhr.status == 200) {
                                    resolve(JSON.parse(xhr.response));
                                }
                                else {
                                    reject(xhr.response);
                                }
                            }
                        };
                        xhr.open("POST", url, true);
                        xhr.send(formData);
                    });
                };
                RestaurantEditComponent = __decorate([
                    core_1.Component({
                        selector: "restaurant-edit",
                        templateUrl: "app/view/restaurant-add.html",
                        providers: [restaurant_service_1.RestaurantService]
                    }), 
                    __metadata('design:paramtypes', [restaurant_service_1.RestaurantService, router_1.RouteParams, router_1.Router])
                ], RestaurantEditComponent);
                return RestaurantEditComponent;
            }());
            exports_1("RestaurantEditComponent", RestaurantEditComponent);
        }
    }
});
//# sourceMappingURL=restaurant-edit.component.js.map