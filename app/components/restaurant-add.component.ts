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
  private filesToUpload: Array<File>;
  private resultUpload:any;

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

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>> fileInput.target.files;
    this.makeFileRequest(
      "http://localhost/slim/restaurantes-api.php/upload-file",
      [], this.filesToUpload).then((result) => {
        this.resultUpload = result;
        this.restaurant.imagen = this.resultUpload.filename;
        //console.log(this.resultUpload.filename);
      }, (error) =>{
          console.log(error);
      });
  }

  makeFileRequest(url:string, params: Array<string>, files: Array<File>){
    return new Promise((resolve, reject) =>{
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for(var i = 0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i].name);
      }
      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            resolve(JSON.parse(xhr.response))
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.open("POST", url, true);
      xhr.send(formData);
    });
  }

}
