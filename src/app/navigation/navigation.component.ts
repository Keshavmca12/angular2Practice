
import {Component, ViewChild, ElementRef} from "@angular/core";
import {HeroFormTemplate2Component} from "../template/hero-form-template2.component";

@Component({
  moduleId:  module.id,
  selector : 'nav-comp',
  template : `<h3 (click)="loadData()">Click me</h3>
              <h3 (click)="loadLargeData()">Click large me</h3>
                <div #dataContainer></div>
                Data :<div [innerHTML]="testData | safeHtml"></div>`,
  providers : [HeroFormTemplate2Component]
 })
export class NavigationComponent{

 private  testData='';
  @ViewChild('dataContainer') dataContainer: ElementRef;

  loadLargeData() {
    this.dataContainer.nativeElement.innerHTML = "<h2> hello large</h2>text box <input type='text' /> <hero-form-template2></hero-form-template2>";
  }
 loadData(){
   this.testData="<h2> hello</h2>text box <input type='text' /> ";
 }

}

