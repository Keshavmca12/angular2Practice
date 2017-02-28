

import {Component,Input, Output, EventEmitter} from "@angular/core";


@Component({
  moduleId:  module.id,
  selector: 'combo-compo',
  template: `
  Name Combo :: 
 <div class="form-group">
      <label>Theme</label>
      <select name="theme" class="form-control" >
        <option *ngFor="let theme of dataObject" >{{theme.name}}</option>
      </select>
    </div>

			`
})

export class ComboComponent{


   /*@Input()
  dataObject: string="hello";*/
	/*@Output()
    dataProvider = new EventEmitter();*/

   @Input() dataObject: Array<any>;
  @Output() dataObject= new EventEmitter<boolean>();

  
  setStatus(status:boolean){
    this.dataObject=status;
    this.dataObject.emit(status);
  }
   
    constructor(){
    	console.log("counter");
    }

}