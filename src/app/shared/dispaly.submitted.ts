import { Component, EventEmitter, Input, Output } from '@angular/core';

import {FileComponent} from "./file.component";

@Component({
  selector: 'display-submitted',
  template: `
  <div *ngIf="submitted">
    <h2>You submitted the following:</h2>
    <div class="row">
      <div class="col-xs-3">Name</div>
      <div class="col-xs-9  pull-left">{{ file.name }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">roles</div>
      <div class="col-xs-9 pull-left">{{ file.roles }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">type</div>
      <div class="col-xs-9 pull-left">{{ file.type }}</div>
    </div>
    
     <div class="row">
      <div class="col-xs-3">To date</div>
      <div class="col-xs-9 pull-left">{{ file.toDate | json }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">To date</div>
      <div class="col-xs-9 pull-left">{{ file.toDate.formatted }}</div>
    </div>
    
     <div class="row">
      <div class="col-xs-3">From date</div>
      <div class="col-xs-9 pull-left">{{ file.fromDate}}</div>
    </div>
    <br>
    <button class="btn btn-default" (click)="onClick()">Edit</button>
  </div>`
})
export class DisplaySubmitted {
  @Input()  file: FileComponent;
  @Input()  submitted = false;
  @Output() submittedChange = new EventEmitter<boolean>();
  onClick() { this.submittedChange.emit(false); }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
