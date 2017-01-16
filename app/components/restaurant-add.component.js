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
    var RestaurantAddComponent;
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
            RestaurantAddComponent = (function () {
                function RestaurantAddComponent(restaurantService, routeParams, router) {
                    this.restaurantService = restaurantService;
                    this.routeParams = routeParams;
                    this.router = router;
                }
                RestaurantAddComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.restaurantService.addRestaurant(this.restaurant).subscribe(function (response) {
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
                RestaurantAddComponent.prototype.ngOnInit = function () {
                    this.restaurant = new restaurant_1.Restaurant(5, this.routeParams.get("name"), this.routeParams.get("address"), this.routeParams.get("description"), "null", "small");
                };
                RestaurantAddComponent.prototype.callPrice = function (value) {
                    this.restaurant.price = value;
                };
                RestaurantAddComponent = __decorate([
                    core_1.Component({
                        selector: "restaurant-add",
                        templateUrl: "app/view/restaurant-add.html",
                        providers: [restaurant_service_1.RestaurantService]
                    }), 
                    __metadata('design:paramtypes', [restaurant_service_1.RestaurantService, router_1.RouteParams, router_1.Router])
                ], RestaurantAddComponent);
                return RestaurantAddComponent;
            }());
            exports_1("RestaurantAddComponent", RestaurantAddComponent);
        }
    }
});
//# sourceMappingURL=restaurant-add.component.js.map