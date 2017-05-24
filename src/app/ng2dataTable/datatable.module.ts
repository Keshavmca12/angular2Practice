import { NgModule }            from '@angular/core';
import {Ng2TableModule} from "ng2-table";
//import {PaginationModule} from "ng2-bootstrap";
import {TableDemoComponent} from "./datatable.component";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [CommonModule, FormsModule,
    HttpModule,Ng2TableModule/*, PaginationModule.forRoot()*/],
  declarations: [ TableDemoComponent ],
  exports:      [ TableDemoComponent ]
})
export class NG2DataTableModule { }
