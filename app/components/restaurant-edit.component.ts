import {Component, OnInit} from "angular2/core";
import {Router, RouteParams} from "angular2/router";
import {RestaurantService} from "../services/restaurant.service";
import {Restaurant} from "../model/restaurant";

@Component({
  selector:"restaurant-edit",
  templateUrl: "app/view/restaurant-add.html",
  providers: [RestaurantService]

})

export class RestaurantEditComponent implements OnInit{
  private title = "Edit Restaurant";
  private restaurant: Restaurant;
  private errorMessage: string;
  private status: string;

  constructor(
    private restaurantService: RestaurantService,
    private routeParams: RouteParams,
    private router: Router
  ){}

  onSubmit(){
    let id = this.routeParams.get("id");
    this.restaurantService.editRestaurant(id, this.restaurant).subscribe(
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
    this.restaurant = new Restaurant(
                                     parseInt(this.routeParams.get("id")),
                                     this.routeParams.get("nombre"),
                                     this.routeParams.get("direccion"),
                                     this.routeParams.get("descripcion"),
                                     "null",
                                     this.routeParams.get("precio")
                                    );

    this.getRestaurant();

  }

  getRestaurant() {
    let id = this.routeParams.get("id");
    this.restaurantService.getRestaurant(id).subscribe(
      response => {
        this.restaurant = response.data;
        this.status = response.status;

        if(this.status !== "success"){
          this.router.navigate(["Home"]);
        }

      },
      error => {
        console.log("Hello");
        this.errorMessage = <any>error;
        console.log(this.errorMessage);
        if(this.errorMessage !== null){
          console.log(this.errorMessage);
          alert("Error in the request");
        }
      });
  }

  callPrice(value){
    this.restaurant.price = value;
  }

}
