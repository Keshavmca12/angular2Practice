import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForbiddenValidatorDirective } from './forbidden-name.directive';
import { SubmittedComponent }          from './submitted.component';
import {DisplaySubmitted} from "./dispaly.submitted";
import {Safe} from "./safehtml.pipe";
import {InvokeDirective} from "./invokeDirective";

@NgModule({
  imports:      [ CommonModule],
  declarations: [ ForbiddenValidatorDirective, SubmittedComponent,DisplaySubmitted,Safe,InvokeDirective ],
  exports:      [ ForbiddenValidatorDirective, SubmittedComponent,DisplaySubmitted,Safe,InvokeDirective,CommonModule]
})
export class SharedModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
