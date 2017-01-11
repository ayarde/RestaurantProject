System.register(["angular2/core", "../services/restaurant.service"], function(exports_1, context_1) {
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
    var core_1, restaurant_service_1;
    var RestaurantsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (restaurant_service_1_1) {
                restaurant_service_1 = restaurant_service_1_1;
            }],
        execute: function() {
            RestaurantsListComponent = (function () {
                function RestaurantsListComponent(restaurantService) {
                    this.restaurantService = restaurantService;
                    this.title = "Restaurants List";
                }
                RestaurantsListComponent.prototype.ngOnInit = function () {
                    this.getRestaurants();
                    console.log("restaurant-list component loaded...");
                };
                RestaurantsListComponent.prototype.getRestaurants = function () {
                    var _this = this;
                    this.restaurantService.getRestaurants().subscribe(function (result) {
                        _this.restaurants = result.data;
                        _this.status = result.status;
                        if (_this.status !== "SUCCESS") {
                            alert("Error in Server");
                        }
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                            alert("Error in the request");
                        }
                    });
                };
                RestaurantsListComponent = __decorate([
                    core_1.Component({
                        selector: "restaurants-list",
                        templateUrl: "app/view/restaurants-list.html",
                        providers: [restaurant_service_1.RestaurantService]
                    }), 
                    __metadata('design:paramtypes', [restaurant_service_1.RestaurantService])
                ], RestaurantsListComponent);
                return RestaurantsListComponent;
            }());
            exports_1("RestaurantsListComponent", RestaurantsListComponent);
        }
    }
});
//# sourceMappingURL=restaurants-list.component.js.map