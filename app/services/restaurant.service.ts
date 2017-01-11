import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Restaurant} from "../model/restaurant";

@Injectable()
export class RestaurantService{
  constructor(private http:Http){}

  getRestaurants(){
    return this.http
            .get("http://localhost/slim/restaurantes-api.php/restaurantes")
            .map(res => res.json());
  }

  getRestaurant(id:string){
    return this.http
            .get("http://localhost/slim/restaurantes-api.php/restaurante/" + id)
            .map(res => res.json());
  }
}
