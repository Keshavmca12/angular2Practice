

import {Component} from "@angular/core";
import {Hero} from "../shared/hero";

@Component({
  moduleId:  module.id,
  selector: 'test-form',
  template: `
  <combo-compo  [(dataObject)]="myData"></combo-compo>


  
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
  
  private  testVar=" tstevarkeshav";
  hero = new Hero(18, 'Dr. WhatIsHisWayTooLongName', '', 'Dr. What');

  getData($event){
    console.log("in data",$event);
    alert("{loading data");
  }
  ngOnInit() {
    this.loadData();
    console.log("ng omn init");
    // Properties are resolved and things like
    // this.mapWindow and this.mapControls
    // had a chance to resolve from the
    // two child components <map-window> and <map-controls>
   
  }
}
