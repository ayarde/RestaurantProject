System.register(["angular2/core", "angular2/router", "../services/restaurant.service"], function(exports_1, context_1) {
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
    var core_1, router_1, restaurant_service_1;
    var RestaurantsDetailComponent;
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
            }],
        execute: function() {
            RestaurantsDetailComponent = (function () {
                function RestaurantsDetailComponent(restaurantService, routeParams, router) {
                    this.restaurantService = restaurantService;
                    this.routeParams = routeParams;
                    this.router = router;
                }
                RestaurantsDetailComponent.prototype.ngOnInit = function () {
                    this.getRestaurant();
                };
                RestaurantsDetailComponent.prototype.getRestaurant = function () {
                    var _this = this;
                    var id = this.routeParams.get("id");
                    var random = this.routeParams.get("random");
                    this.restaurantService.getRestaurant(id, random).subscribe(function (response) {
                        _this.restaurant = response.data;
                        _this.status = response.status;
                        if (_this.status !== "success") {
                            //alert("Error in Server");
                            _this.router.navigate(["Home"]);
                        }
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                            alert("Error in the request");
                        }
                    });
                };
                RestaurantsDetailComponent = __decorate([
                    core_1.Component({
                        selector: "restaurants-detail",
                        templateUrl: "app/view/restaurant-detail.html",
                        providers: [restaurant_service_1.RestaurantService]
                    }), 
                    __metadata('design:paramtypes', [restaurant_service_1.RestaurantService, router_1.RouteParams, router_1.Router])
                ], RestaurantsDetailComponent);
                return RestaurantsDetailComponent;
            }());
            exports_1("RestaurantsDetailComponent", RestaurantsDetailComponent);
        }
    }
});
//# sourceMappingURL=restaurant-detail.component.js.map