"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forbidden_name_directive_1 = require("./forbidden-name.directive");
var submitted_component_1 = require("./submitted.component");
var dispaly_submitted_1 = require("./dispaly.submitted");
var safehtml_pipe_1 = require("./safehtml.pipe");
var invokeDirective_1 = require("./invokeDirective");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [forbidden_name_directive_1.ForbiddenValidatorDirective, submitted_component_1.SubmittedComponent, dispaly_submitted_1.DisplaySubmitted, safehtml_pipe_1.Safe, invokeDirective_1.InvokeDirective],
        exports: [forbidden_name_directive_1.ForbiddenValidatorDirective, submitted_component_1.SubmittedComponent, dispaly_submitted_1.DisplaySubmitted, safehtml_pipe_1.Safe, invokeDirective_1.InvokeDirective, common_1.CommonModule]
    })
], SharedModule);
exports.SharedModule = SharedModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=shared.module.js.map