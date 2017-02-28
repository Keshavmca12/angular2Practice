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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
/** A hero's name can't match the given regular expression */
function forbiddenDateValidator(fromDate, toDate) {
    return function (control) {
        console.log("from date " + fromDate + "        todate   " + toDate);
        var val = false;
        if (toDate < fromDate) {
            val = true;
        }
        var date1 = control.value;
        return val ? { 'forbiddenDate': { date1: date1 } } : null;
    };
}
exports.forbiddenDateValidator = forbiddenDateValidator;
var ForbiddenValidatorDirective = ForbiddenValidatorDirective_1 = (function () {
    function ForbiddenValidatorDirective() {
        this.valFn = forms_1.Validators.nullValidator;
    }
    /* ngOnChanges(changes: SimpleChanges): void {
       const change = changes['fromDate'];
       const change1 = changes['toDate'];
       if (change1<change) {
         this.valFn = forbiddenDateValidator(true);
       } else {
         this.valFn = Validators.nullValidator;
       }
     }*/
    ForbiddenValidatorDirective.prototype.validate = function (control) {
        return this.valFn(control);
    };
    return ForbiddenValidatorDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ForbiddenValidatorDirective.prototype, "fromDate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ForbiddenValidatorDirective.prototype, "toDate", void 0);
ForbiddenValidatorDirective = ForbiddenValidatorDirective_1 = __decorate([
    core_1.Directive({
        selector: '[forbiddenDate]',
        providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: ForbiddenValidatorDirective_1, multi: true }]
    })
], ForbiddenValidatorDirective);
exports.ForbiddenValidatorDirective = ForbiddenValidatorDirective;
var ForbiddenValidatorDirective_1;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
//# sourceMappingURL=date-validation.js.map