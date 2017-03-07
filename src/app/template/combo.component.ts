

import {Component,Input, Output, EventEmitter} from "@angular/core";


@Component({
  moduleId:  module.id,
  selector: 'combo-compo',
  template: `
  <div> combo component </div>
 <div class="form-group">
      <label>Theme</label>
      <select name="theme" class="form-control" [ngModel]="selectedObject" (ngModelChange)="onChangeObj($event)">
        <option [ngValue]="theme" *ngFor="let theme of dataObject" >{{theme.name}}</option>
      </select>
    </div>

			`
})

export class ComboComponent{
	
  selectedObject='';
   @Input() dataObject: Array<any>;
  @Output() dataObjectChange= new EventEmitter<boolean>();

  @Output() onComboChange = new EventEmitter();


   onChangeObj(newObj) {
    console.log("new",newObj);
    this.selectedObject = newObj;
    this.onComboChange.emit(this.selectedObject );
  }
   
    /*constructor(){
    	console.log("counter");
    }*/

}