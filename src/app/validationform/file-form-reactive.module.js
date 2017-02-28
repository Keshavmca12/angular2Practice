"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("../shared/shared.module");
var file_form_reactive_component_1 = require("./file-form-reactive.component");
var mydatepicker_1 = require("mydatepicker");
var FileFormReactiveModule = (function () {
    function FileFormReactiveModule() {
    }
    return FileFormReactiveModule;
}());
FileFormReactiveModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_1.SharedModule, forms_1.ReactiveFormsModule, mydatepicker_1.MyDatePickerModule],
        declarations: [file_form_reactive_component_1.FileFormReactiveComponent],
        exports: [file_form_reactive_component_1.FileFormReactiveComponent]
    })
], FileFormReactiveModule);
exports.FileFormReactiveModule = FileFormReactiveModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=file-form-reactive.module.js.map