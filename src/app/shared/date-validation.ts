import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function forbiddenDateValidator(fromDate: string,toDate: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    console.log("from date "+fromDate+"        todate   "+toDate);
    let val:boolean=false;
    if (toDate<fromDate) {
      val=true;
    }
    const date1 = control.value;
    return val ? {'forbiddenDate': {date1} } : null;
  };
}

@Directive({
  selector: '[forbiddenDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator{
  @Input() fromDate: string;
  @Input() toDate: string;
  private valFn = Validators.nullValidator;

 /* ngOnChanges(changes: SimpleChanges): void {
    const change = changes['fromDate'];
    const change1 = changes['toDate'];
    if (change1<change) {
      this.valFn = forbiddenDateValidator(true);
    } else {
      this.valFn = Validators.nullValidator;
    }
  }*/

  validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }
}



/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
