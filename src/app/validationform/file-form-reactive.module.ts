import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule }              from '../shared/shared.module';
import {FileFormReactiveComponent} from './file-form-reactive.component';
import {MyDatePickerModule} from "mydatepicker";

@NgModule({
  imports:      [ SharedModule, ReactiveFormsModule,MyDatePickerModule ],
  declarations: [ FileFormReactiveComponent ],
  exports:      [ FileFormReactiveComponent ]
})
export class FileFormReactiveModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
