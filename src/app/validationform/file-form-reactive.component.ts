/* tslint:disable: member-ordering forin */
import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Hero }                   from '../shared/hero';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
import {FileComponent} from "../shared/file.component";
import {IMyOptions} from "mydatepicker";
import {forbiddenDateValidator} from "../shared/date-validation";

@Component({
  moduleId:  module.id,
  selector: 'file-form-reactive',
  templateUrl: 'file-form-reactive.component.html'
})
export class FileFormReactiveComponent implements OnInit {

  private toDateOptions: IMyOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
    editableDateField:false,
    editableMonthAndYear:false
  };
  private fromDateOptions: IMyOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy'
  };

  roles = ['EMD', 'Admin', 'User',''];

  fileComponent = new  FileComponent(45,'','physical','','',this.roles[0]);

  submitted = false;

  onSubmit() {
    if(this.fileForm.valid){
      this.submitted = true;
     this.fileComponent = this.fileForm.value;
    }
    this.fileForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }

  // Reset the form with a new file AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;
  addFile() {
    this.fileComponent = new FileComponent(42, '', '','','','');
    this.buildForm();

    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  fileForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.fileForm = this.fb.group({
      'name': [this.fileComponent.name, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(24),
          forbiddenNameValidator(/bob/i)
        ]
      ],
      'type': [this.fileComponent.type,Validators.required],
      'roles':    [this.fileComponent.roles, Validators.required],
      'toDate':    [this.fileComponent.toDate, Validators.required],
      'fromDate':    [this.fileComponent.fromDate, Validators.required]
    });
  }


  onValueChanged(data?: any) {
    if (!this.fileForm) { return; }
    const form = this.fileForm;
    console.log("form",form);
    console.log("this.formErrors",this.formErrors);
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty || !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  setDate(): void {
    // Set today date using the setValue function
    let date = new Date();
    this.fileForm.setValue({toDate: {
      date: {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()}
    }});
  }

  clearDate(): void {
    // Clear the date using the setValue function
    this.fileForm.setValue({toDate: ''});
  }

  formErrors = {
    'name': '',
    'type': '',
    'roles': '',
    'toDate':'',
    'fromDate':''
  };

  validationMessages = {
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'type':{
       'required': 'Type is required.'
    },
    'roles': {
      'required': 'Roles is required.'
    },
    'toDate':{
      'required':'Please select to date'
    },
    'fromDate':{
      'required':'Please select from date',
      'dateValidation' : ''
    }
  };
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
