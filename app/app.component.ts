import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";


@Component({
  selector:"my-app",
  templateUrl: "app/view/home.html",
  directives: [ROUTER_DIRECTIVES]

})

export class AppComponent{
  private title:string = "Restaurants with Angular 2";
}