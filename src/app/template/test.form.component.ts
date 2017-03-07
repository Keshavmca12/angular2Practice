

import {Component} from "@angular/core";
import {Hero} from "../shared/hero";

@Component({
  moduleId:  module.id,
  selector: 'test-form',
  template: `
  <combo-compo  [(dataObject)]="myData" (onComboChange)="handleUserUpdated($event)"></combo-compo>

<combo-compo  [(dataObject)]="auxData" (onComboChange)="handleauxUpdated($event)"></combo-compo>
  
<h1>Test form</h1><form>
      <div class="form-group">
        <label for="name">Name</label>
  {{testVar}}
        <input type="text" id="name" class="form-control"
               required minlength="4" maxlength="24"
               name="name" [(ngModel)]="username" #name1="ngModel"
               />
{{username}}
       <div *ngIf="name1.errors && (name1.dirty || name1.touched)"
             class="alert alert-danger">
            <div [hidden]="!name1.errors.required">
              Name is required
            </div>
            <div [hidden]="!name1.errors.minlength">
              Name must be at least 4 characters long.
            </div>
            <div [hidden]="!name1.errors.maxlength">
              Name cannot be more than 24 characters long.
            </div>
        </div>
      </div></form>`
})

export  class TestForm{
myData :Array<any>=[];

auxDataSet:any ={};
auxData :Array<any>=[];

  loadData() {
    this.myData = [
  {
    'name': 'Victoria Cantrell',
    'position': 'Integer Corporation',
    'office': 'Croatia',
    'ext': '0839',
    'startDate': '2015/08/19',
    'salary': 208.178
  }, {
    'name': 'Pearl Crosby',
    'position': 'In PC',
    'office': 'Cambodia',
    'ext': '8262',
    'startDate': '2014/10/08',
    'salary': 114.367
  }, {
    'name': 'Colette Foley',
    'position': 'Lorem Inc.',
    'office': 'Korea, North',
    'ext': '8968',
    'startDate': '2015/07/19',
    'salary': 721.473
  }];
  console.log(this.myData)
  }

  loadAuxData(){
this.auxDataSet =
   {
    '0839':[{
    'name': 'Aux Victoria Cantrell',
    'position': 'Integer Corporation',
    'office': 'Croatia',
    'ext': '0839',
    'startDate': '2015/08/19',
    'salary': 208.178
  }, {
    'name': 'Aux Pearl Crosby',
    'position': 'In PC',
    'office': 'Cambodia',
    'ext': '8262',
    'startDate': '2014/10/08',
    'salary': 114.367
  }
], 
'8968':[{
    'name': 'Colette Foley',
    'position': 'Lorem Inc.',
    'office': 'Korea, North',
    'ext': '8968',
    'startDate': '2015/07/19',
    'salary': 721.473
  },{
        'name': 'Liberty Gallegos',
        'position': 'Nec Diam LLC',
        'office': 'Ghana',
        'ext': '9266',
        'startDate': '2015/06/18',
        'salary': 554.375
    }, {
        'name': 'Dennis York',
        'position': 'Nullam Suscipit Foundation',
        'office': 'Namibia',
        'ext': '3133',
        'startDate': '2015/03/20',
        'salary': 90.417
    }
  ]};
  }


  handleUserUpdated(event) {
    alert("changing");
    console.log("in changing",event);
     console.log("in changing ext",event.ext);
      console.log("in changing this.auxDataSet",this.auxDataSet);
    this.auxData=this.auxDataSet[event.ext];
    console.log("in changing auxData",this.auxData);
    // Handle the event
  }

  handleauxUpdated(event) {
    alert("changing aux");
    console.log("in changing aux",event);
    // Handle the event
  }
  
  private  testVar=" tstevarkeshav";
  hero = new Hero(18, 'Dr. WhatIsHisWayTooLongName', '', 'Dr. What');

  getData($event){
    console.log("in data",$event);
    alert("{loading data");
  }
  ngOnInit() {
    this.loadData();
    this.loadAuxData();
    console.log("ng omn init",this.auxDataSet);
    // Properties are resolved and things like
    // this.mapWindow and this.mapControls
    // had a chance to resolve from the
    // two child components <map-window> and <map-controls>
   
  }
}
