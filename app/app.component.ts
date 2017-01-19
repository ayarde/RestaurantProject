import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestaurantsListComponent} from "./components/restaurants-list.component";
import {RestaurantsDetailComponent} from "./components/restaurant-detail.component";
import {RestaurantAddComponent} from "./components/restaurant-add.component";
import {RestaurantEditComponent} from "./components/restaurant-edit.component";

@Component({
  selector:"my-app",
  templateUrl: "app/view/home.html",
  directives: [RestaurantsListComponent,ROUTER_DIRECTIVES]

})

@RouteConfig([
  {path: "/", name:"Home", component:RestaurantsListComponent,
   useAsDefault: true
  },
  {path: "/restaurant/:id", name:"Restaurant",
   component:RestaurantsDetailComponent
  },
  {path: "/add-restaurant/", name:"AddRestaurant",
    component:RestaurantAddComponent
  },
  {path: "/edit-restaurant/:id", name:"EditRestaurant",
    component:RestaurantEditComponent
  }
])

export class AppComponent{
  private title:string = "Restaurants";
}
