import {Directive, Output, EventEmitter} from "@angular/core";
@Directive({
  selector: '[invoke]'
})
export class InvokeDirective {
  @Output() invoke:EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    console.log("xxxx");
    this.invoke.emit(null);
  }

 /* ngAfterContentInit(){
    console.log("yyy");
  }*/
}
