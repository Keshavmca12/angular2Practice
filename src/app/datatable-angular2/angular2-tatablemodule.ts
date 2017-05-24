import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule } from "@angular/forms";
import {DataTableModule} from "angular2-datatable";
import { HttpModule } from "@angular/http";
import { TestTableComponent} from "./angular2-datatable";
import {DataFilterPipe} from "./data-filterpipe";
import {SharedModule} from "../shared/shared.module";
import {LaddaModule} from 'angular2-ladda';


@NgModule({
  imports:      [
    CommonModule,
    DataTableModule,
    FormsModule,
    HttpModule,
    SharedModule,
    LaddaModule, LaddaModule.forRoot({
            style: "zoom-out",
            spinnerSize: 40,
            spinnerColor: "white",
            spinnerLines: 12
        })
  ],
  declarations: [ TestTableComponent,DataFilterPipe ],
  exports: [TestTableComponent,DataFilterPipe]
})

export class Angular2DatatableModule { }


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
