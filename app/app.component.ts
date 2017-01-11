import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestaurantsListComponent} from "./components/restaurants-list.component";


@Component({
  selector:"my-app",
  templateUrl: "app/view/home.html",
  directives: [RestaurantsListComponent,ROUTER_DIRECTIVES]

})

export class AppComponent{
  private title:string = "Restaurants";
}
