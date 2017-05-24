import {Component, OnInit, Directive, Output, EventEmitter} from "@angular/core";
import {Http} from "@angular/http";

@Component({
  moduleId:  module.id,
  selector: 'angular2-datatable',
  templateUrl: './angular2-datatable.html'
})
export class TestTableComponent implements OnInit {

  public data;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "email";
  public sortOrder = "asc";
  isLoading:boolean=false;


  constructor(private http: Http) {
  }

  ngOnInit(): void {
    this.http.get("app/datatable-angular2/data.json")
      .subscribe((data)=> {
        setTimeout(()=> {
          this.data = data.json();
        }, 1000);
      });
  }

  progressLoading(event){
    this.isLoading=!this.isLoading
    console.log("isLoading"+this.isLoading);
    setTimeout(()=>{this.isLoading=!this.isLoading},3000);
  }

  testFunc(item){
 //  console.log("item id ",item.email);
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }
  remove(data){
    alert(data);
    console.log("removeData",data);
  }

}

