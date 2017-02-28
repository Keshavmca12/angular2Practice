"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular2_datatable_1 = require("angular2-datatable");
var http_1 = require("@angular/http");
var angular2_datatable_2 = require("./angular2-datatable");
var data_filterpipe_1 = require("./data-filterpipe");
var shared_module_1 = require("../shared/shared.module");
var Angular2DatatableModule = (function () {
    function Angular2DatatableModule() {
    }
    return Angular2DatatableModule;
}());
Angular2DatatableModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            angular2_datatable_1.DataTableModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            shared_module_1.SharedModule
        ],
        declarations: [angular2_datatable_2.TestTableComponent, data_filterpipe_1.DataFilterPipe],
        exports: [angular2_datatable_2.TestTableComponent, data_filterpipe_1.DataFilterPipe]
    })
], Angular2DatatableModule);
exports.Angular2DatatableModule = Angular2DatatableModule;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
//# sourceMappingURL=angular2-tatablemodule.js.map