"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable: member-ordering forin */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forbidden_name_directive_1 = require("../shared/forbidden-name.directive");
var file_component_1 = require("../shared/file.component");
var FileFormReactiveComponent = (function () {
    function FileFormReactiveComponent(fb) {
        this.fb = fb;
        this.toDateOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
            editableDateField: false,
            editableMonthAndYear: false
        };
        this.fromDateOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy'
        };
        this.roles = ['EMD', 'Admin', 'User', ''];
        this.fileComponent = new file_component_1.FileComponent(45, '', 'physical', '', '', this.roles[0]);
        this.submitted = false;
        // Reset the form with a new file AND restore 'pristine' class state
        // by toggling 'active' flag which causes the form
        // to be removed/re-added in a tick via NgIf
        // TODO: Workaround until NgForm has a reset method (#6822)
        this.active = true;
        this.formErrors = {
            'name': '',
            'type': '',
            'roles': '',
            'toDate': '',
            'fromDate': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 4 characters long.',
                'maxlength': 'Name cannot be more than 24 characters long.',
                'forbiddenName': 'Someone named "Bob" cannot be a hero.'
            },
            'type': {
                'required': 'Type is required.'
            },
            'roles': {
                'required': 'Roles is required.'
            },
            'toDate': {
                'required': 'Please select to date'
            },
            'fromDate': {
                'required': 'Please select from date',
                'dateValidation': ''
            }
        };
    }
    FileFormReactiveComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.fileForm.valid) {
            this.submitted = true;
            this.fileComponent = this.fileForm.value;
        }
        this.fileForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    FileFormReactiveComponent.prototype.addFile = function () {
        var _this = this;
        this.fileComponent = new file_component_1.FileComponent(42, '', '', '', '', '');
        this.buildForm();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    FileFormReactiveComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    FileFormReactiveComponent.prototype.buildForm = function () {
        this.fileForm = this.fb.group({
            'name': [this.fileComponent.name, [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(24),
                    forbidden_name_directive_1.forbiddenNameValidator(/bob/i)
                ]
            ],
            'type': [this.fileComponent.type, forms_1.Validators.required],
            'roles': [this.fileComponent.roles, forms_1.Validators.required],
            'toDate': [this.fileComponent.toDate, forms_1.Validators.required],
            'fromDate': [this.fileComponent.fromDate, forms_1.Validators.required]
        });
    };
    FileFormReactiveComponent.prototype.onValueChanged = function (data) {
        if (!this.fileForm) {
            return;
        }
        var form = this.fileForm;
        console.log("form", form);
        console.log("this.formErrors", this.formErrors);
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty || !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    FileFormReactiveComponent.prototype.setDate = function () {
        // Set today date using the setValue function
        var date = new Date();
        this.fileForm.setValue({ toDate: {
                date: {
                    year: date.getFullYear(),
                    month: date.getMonth() + 1,
                    day: date.getDate()
                }
            } });
    };
    FileFormReactiveComponent.prototype.clearDate = function () {
        // Clear the date using the setValue function
        this.fileForm.setValue({ toDate: '' });
    };
    return FileFormReactiveComponent;
}());
FileFormReactiveComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'file-form-reactive',
        templateUrl: 'file-form-reactive.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], FileFormReactiveComponent);
exports.FileFormReactiveComponent = FileFormReactiveComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=file-form-reactive.component.js.map