"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1 class=\"title\">Angular Router</h1>\n    <nav>\n      <a routerLink=\"/reactive\" routerLinkActive=\"active\">Form</a>\n      <a routerLink=\"/fileForm\" routerLinkActive=\"active\">fileForm</a>\n       <a routerLink=\"/testForm\" routerLinkActive=\"active\">testForm</a>\n      <a routerLink=\"/template1\" routerLinkActive=\"active\">template1</a>\n      <a routerLink=\"/naviagtion\"  routerLinkActive=\"inactive\" >Navigation</a>\n      <a routerLink=\"/angular2Dtable\"  routerLinkActive=\"inactive\" >angular2Dtable</a>\n       <a routerLink=\"/ng2Dtable\"  routerLinkActive=\"inactive\" >ng2Dtable</a>\n         <a routerLink=\"/ng2Dtable\"  routerLinkActive=\"inactive\" >ng2Dtable</a>\n         <a routerLink=\"/pdfViewer\"  routerLinkActive=\"inactive\" >pdfViewer</a>\n    </nav>\n      <app-breadcrumb></app-breadcrumb>\n    <router-outlet></router-outlet>\n    <!--<router-outlet name=\"popup\"></router-outlet>-->\n             <!-- <test-form></test-form><hr>\n              <file-form-reactive></file-form-reactive>\n             <hr>\n             <hero-form-template2></hero-form-template2>\n             <hr>\n             <hero-form-reactive3></hero-form-reactive3>\n             <hr/>\n             <hero-form-template1></hero-form-template1>-->\n             "
    })
], AppComponent);
exports.AppComponent = AppComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=app.component.js.map