import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestaurantService} from "../services/restaurant.service";
import {Restaurant} from "../model/restaurant";

@Component({
  selector:"restaurants-list",
  templateUrl: "app/view/restaurants-list.html",
  providers: [RestaurantService]

})

export class RestaurantsListComponent{
  private title:string = "Restaurants List";
  private restaurants: Restaurant[];
  private status:string;
  private errorMessage:string;

  constructor(private restaurantService:RestaurantService){

  }

  ngOnInit(){
    this.getRestaurants();
    console.log("restaurant-list component loaded...");
  }

  getRestaurants(){
    this.restaurantService.getRestaurants().subscribe(result =>{
                                            this.restaurants = result.data;
                                            this.status = result.status;

                                            if(this.status !== "SUCCESS"){
                                              alert("Error in Server");
                                            }
                                          },
                                          error =>{
                                            this.errorMessage = <any>error;
                                            if(this.errorMessage !== null){
                                              console.log(this.errorMessage);
                                              alert("Error in the request");
                                            }
                                          }
                                        );
  }
}
