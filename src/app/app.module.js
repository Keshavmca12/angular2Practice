"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var hero_form_template_module_1 = require("./template/hero-form-template.module");
var hero_form_reactive_module_1 = require("./reactive/hero-form-reactive.module");
var file_form_reactive_module_1 = require("./validationform/file-form-reactive.module");
var test_form_component_1 = require("./template/test.form.component");
var router_1 = require("@angular/router");
var hero_form_template2_component_1 = require("./template/hero-form-template2.component");
var file_form_reactive_component_1 = require("./validationform/file-form-reactive.component");
var hero_form_template1_component_1 = require("./template/hero-form-template1.component");
var navigation_module_1 = require("./navigation/navigation.module");
var navigation_component_1 = require("./navigation/navigation.component");
var hero_form_reactive_component_1 = require("./reactive/hero-form-reactive.component");
var breadcrumb_module_1 = require("./breadcrumbnew/breadcrumb.module");
var angular2_tatablemodule_1 = require("./datatable-angular2/angular2-tatablemodule");
var angular2_datatable_1 = require("./datatable-angular2/angular2-datatable");
var datatable_module_1 = require("./ng2dataTable/datatable.module");
var datatable_component_1 = require("./ng2dataTable/datatable.component");
var appRoutes = [
    {
        path: 'reactive',
        component: hero_form_reactive_component_1.HeroFormReactiveComponent
    },
    {
        path: 'fileForm',
        component: file_form_reactive_component_1.FileFormReactiveComponent
    },
    {
        path: 'testForm',
        component: test_form_component_1.TestForm
    },
    {
        path: 'template1',
        component: hero_form_template1_component_1.HeroFormTemplate1Component
    },
    {
        path: 'naviagtion',
        component: navigation_component_1.NavigationComponent
    },
    {
        path: 'angular2Dtable',
        component: angular2_datatable_1.TestTableComponent
    },
    {
        path: 'ng2Dtable',
        component: datatable_component_1.TableDemoComponent
    },
    { path: '**', component: hero_form_template2_component_1.HeroFormTemplate2Component }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            hero_form_template_module_1.HeroFormTemplateModule,
            hero_form_reactive_module_1.HeroFormReactiveModule,
            file_form_reactive_module_1.FileFormReactiveModule,
            navigation_module_1.NavigationModule,
            breadcrumb_module_1.BreadcrumbModule,
            router_1.RouterModule,
            router_1.RouterModule.forRoot(appRoutes),
            angular2_tatablemodule_1.Angular2DatatableModule,
            datatable_module_1.NG2DataTableModule
        ],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=app.module.js.map