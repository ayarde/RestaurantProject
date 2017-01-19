import {Component, OnInit} from "angular2/core";
import {Router, RouteParams} from "angular2/router";
import {RestaurantService} from "../services/restaurant.service";
import {Restaurant} from "../model/restaurant";

@Component({
  selector:"restaurant-add",
  templateUrl: "app/view/restaurant-add.html",
  providers: [RestaurantService]

})

export class RestaurantAddComponent implements OnInit{
  private title = "Add a new Restaurant";
  private restaurant: Restaurant;
  private errorMessage: string;
  private status: string;

  constructor(
    private restaurantService: RestaurantService,
    private routeParams: RouteParams,
    private router: Router
  ){}

  onSubmit(){
    this.restaurantService.addRestaurant(this.restaurant).subscribe(
      response => {
        this.status = response.status;
        if(this.status !== "success"){
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
    this.router.navigate(["Home"]);
  }

  ngOnInit(){
    this.restaurant = new Restaurant(5,
                                     this.routeParams.get("name"),
                                     this.routeParams.get("address"),
                                     this.routeParams.get("description"),
                                     "null",
                                     "small"
                                    );

  }

  callPrice(value){
    this.restaurant.price = value;
  }

}
