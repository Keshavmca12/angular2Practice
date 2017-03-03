import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1 class="title">Angular Router</h1>
    <nav>
      <a routerLink="/reactive" routerLinkActive="active">Form</a>
      <a routerLink="/fileForm" routerLinkActive="active">fileForm</a>
       <a routerLink="/testForm" routerLinkActive="active">testForm</a>
      <a routerLink="/template1" routerLinkActive="active">template1</a>
      <a routerLink="/naviagtion"  routerLinkActive="inactive" >Navigation</a>
      <a routerLink="/angular2Dtable"  routerLinkActive="inactive" >angular2Dtable</a>
       <a routerLink="/ng2Dtable"  routerLinkActive="inactive" >ng2Dtable</a>
         <a routerLink="/ng2Dtable"  routerLinkActive="inactive" >ng2Dtable</a>
         <a routerLink="/pdfViewer"  routerLinkActive="inactive" >pdfViewer</a>
    </nav>
      <app-breadcrumb></app-breadcrumb>
    <router-outlet></router-outlet>
    <!--<router-outlet name="popup"></router-outlet>-->
             <!-- <test-form></test-form><hr>
              <file-form-reactive></file-form-reactive>
             <hr>
             <hero-form-template2></hero-form-template2>
             <hr>
             <hero-form-reactive3></hero-form-reactive3>
             <hr/>
             <hero-form-template1></hero-form-template1>-->
             `
})
export class AppComponent { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
