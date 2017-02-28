

import {Component,Input, Output, EventEmitter} from "@angular/core";


@Component({
  moduleId:  module.id,
  selector: 'combo-compo',
  template: `
  <div> combo component </div>
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
	

   @Input() dataObject: Array<any>;
  @Output() dataObjectChange= new EventEmitter<boolean>();

  
  /*setStatus(status:boolean){
    this.dataObjectChange=status;
    this.dataObjectChange.emit(status);
  }*/
   
    /*constructor(){
    	console.log("counter");
    }*/

}