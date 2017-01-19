import {Component, OnInit} from "angular2/core";
import {RouteParams, Router} from "angular2/router";
import {RestaurantService} from "../services/restaurant.service";
import {Restaurant} from "../model/restaurant";

@Component({
  selector:"restaurants-detail",
  templateUrl: "app/view/restaurant-detail.html",
  providers: [RestaurantService]

})

export class RestaurantsDetailComponent implements OnInit{
  private restaurant: Restaurant[];
  private errorMessage: string;
  private status: string;

  constructor(
    private restaurantService: RestaurantService,
    private routeParams: RouteParams,
    private router: Router
  ){}

  ngOnInit(){
    this.getRestaurant();
  }

  getRestaurant() {
    let id = this.routeParams.get("id");
    let random = this.routeParams.get("random");

    this.restaurantService.getRestaurant(id, random).subscribe(
      response => {
        this.restaurant = response.data;
        this.status = response.status;

        if(this.status !== "success"){
          //alert("Error in Server");
          this.router.navigate(["Home"]);
        }

      },
      error => {
        this.errorMessage = <any>error;
        if(this.errorMessage !== null){
          console.log(this.errorMessage);
          alert("Error in the request");
        }
      });
  }
}
