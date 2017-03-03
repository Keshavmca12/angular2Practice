import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }           from './app.component';
import { HeroFormTemplateModule } from './template/hero-form-template.module';
import { HeroFormReactiveModule } from './reactive/hero-form-reactive.module';
import {FileFormReactiveModule} from "./validationform/file-form-reactive.module";
import {TestForm} from "./template/test.form.component";
import {RouterModule, Routes} from "@angular/router";
import {HeroFormTemplate2Component} from "./template/hero-form-template2.component";
import {FileFormReactiveComponent} from "./validationform/file-form-reactive.component";
import {HeroFormTemplate1Component} from "./template/hero-form-template1.component";
import {NavigationModule} from "./navigation/navigation.module";
import {NavigationComponent} from "./navigation/navigation.component";
import {HeroFormReactiveComponent} from "./reactive/hero-form-reactive.component";
import {BreadcrumbModule} from "./breadcrumbnew/breadcrumb.module";
import {Angular2DatatableModule} from "./datatable-angular2/angular2-tatablemodule";
import {TestTableComponent} from "./datatable-angular2/angular2-datatable";
import {NG2DataTableModule} from "./ng2dataTable/datatable.module";
import {TableDemoComponent} from "./ng2dataTable/datatable.component";
import {MyPDFViewerModule} from "./pdfviewerComponent/pdfviewerModule";
import {MyPDFViewerComponent} from "./pdfviewerComponent/pdfCiewerComponent";


const appRoutes: Routes = [
  {
    path: 'reactive',
    component: HeroFormReactiveComponent
   /* outlet : 'popup'*/
  },
  {
    path: 'fileForm',
    component: FileFormReactiveComponent
  },
  {
    path: 'testForm',
    component:TestForm
  },
  {
    path: 'template1',
    component: HeroFormTemplate1Component
  },
  {
    path: 'naviagtion',
    component: NavigationComponent
  },
  {
    path: 'angular2Dtable',
    component: TestTableComponent
  },
  {
    path: 'ng2Dtable',
    component: TableDemoComponent
  },
  {
    path: 'pdfViewer',
    component: MyPDFViewerComponent
  },
  { path: '**', component: HeroFormTemplate2Component }
];

@NgModule({
  imports: [
    BrowserModule,
    HeroFormTemplateModule,
    HeroFormReactiveModule,
    FileFormReactiveModule,
    NavigationModule,
    BreadcrumbModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    Angular2DatatableModule,
    NG2DataTableModule,
    MyPDFViewerModule
  ],

  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
