import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {RestaurantService} from "../services/restaurant.service";
import {Restaurant} from "../model/restaurant";

@Component({
  selector:"restaurants-list",
  templateUrl: "app/view/restaurants-list.html",
  directives: [ROUTER_DIRECTIVES],
  providers: [RestaurantService]

})

export class RestaurantsListComponent implements OnInit{
  private title:string = "Restaurants List:";
  private restaurants: Restaurant[];
  private status:string;
  private errorMessage;
  private confirm;

  constructor(private restaurantService:RestaurantService){

  }

  ngOnInit(){
    this.getRestaurants();
    console.log("restaurant-list component loaded...");
  }

  getRestaurants(){
    let restaurants_box = <HTMLElement> document
                          .querySelector("#restaurants-list .loading");
    restaurants_box.style.visibility = "visible";
    this.restaurantService.getRestaurants().subscribe(result => {
                                        this.restaurants = result.data;
                                        this.status = result.status;

                                        if(this.status !== "success"){
                                          alert("Error in Server");
                                        }
                                        restaurants_box.style.display="none";
                                      },
                                      error => {
                                        this.errorMessage = <any>error;
                                        if(this.errorMessage !== null){
                                          console.log(this.errorMessage);
                                          alert("Error in the request");
                                        }
                                      }
                                    );
  }

  onConfirmDelete(id){
    this.confirm = id;
  }

  onCancelDelete(id){
    this.confirm = null;
  }

  onDeleteRestaurant(id:string){
    this.restaurantService.deleteRestaurant(id).subscribe(
                          result => {
                            this.status = result.status;
                            if(this.status !== "success"){
                              alert("Error in Server");
                            }
                            this.getRestaurants();
                          },
                          error => {
                            this.errorMessage = <any>error;
                            if(this.errorMessage !== null){
                              console.log(this.errorMessage);
                              alert("Error in the request");
                            }
                          }
                        );
  }
}
