import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyPDFViewerComponent } from './pdfCiewerComponent';
import {FormsModule} from "@angular/forms";
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@NgModule({
  imports: [BrowserModule,FormsModule],
  declarations: [MyPDFViewerComponent, PdfViewerComponent],
  bootstrap: [MyPDFViewerComponent]
})

export class MyPDFViewerModule { }
