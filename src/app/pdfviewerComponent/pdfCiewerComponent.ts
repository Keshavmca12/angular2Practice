import { Component,HostListener,NgZone } from '@angular/core';

@Component({
  selector: 'example-app',
  template: `
  <div>
  <div>
      <label>PDF src</label>
      <input type="text" placeholder="PDF src" [(ngModel)]="pdfSrc">
      <input type="button" name="increment" value="next"  (click)="incrementpage()"/>
  </div>
  <div>
      <label>Page:</label>
      <input type="number" placeholder="Page" [(ngModel)]="page" >
  </div>
 <div>
  <pdf-viewer [src]="pdfSrc" 
              [page]="page" 
              [original-size]="true" 
              style="display: block;"
    (after-load-complete)="callBackFn($event)" ></pdf-viewer>
    </div>
    </div>
  `
})
export class MyPDFViewerComponent {
  pdfSrc: string = '/pdf-test.pdf';
  page: number = 1;
 /*@HostListener('window:scroll', ['$event'])
    onScroll(event) { 
       //alert("scrolling");
       console.log("event inside");
       this.page=this.page+1;
   }  */

  incrementpage(){
    this.page=this.page+1;
  }
 
/* [show-all]="true"*/ 
  callBackFn(pdf: PDFDocumentProxy) {
   // do anything with "pdf"
    console.log("pdf",pdf);
}

lastScrollTop: number = 0;
  direction: string = "";
  constructor(lc: NgZone) {
    //alert("in");
     window.onscroll = () => {
      // alert("in scroll");
        let st = window.pageYOffset;
        let dir = '';
        if (st > this.lastScrollTop) {
            dir = "down";
        } else {
            dir = "up";
        }
        //console.log("direction here",this.direction);
        this.lastScrollTop = st;
        lc.run(() => {
          this.direction = dir;
        //  console.log("direction",this.direction);
          if(dir=="up"){
            this.page=this.page-1;
          }else if(dir=="down"){
            this.page=this.page+1;
          }
        });
      };
  }
}
