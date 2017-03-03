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
var MyPDFViewerComponent = (function () {
    function MyPDFViewerComponent(lc) {
        var _this = this;
        this.pdfSrc = '/pdf-test.pdf';
        this.page = 1;
        this.lastScrollTop = 0;
        this.direction = "";
        //alert("in");
        window.onscroll = function () {
            // alert("in scroll");
            var st = window.pageYOffset;
            var dir = '';
            if (st > _this.lastScrollTop) {
                dir = "down";
            }
            else {
                dir = "up";
            }
            //console.log("direction here",this.direction);
            _this.lastScrollTop = st;
            lc.run(function () {
                _this.direction = dir;
                //  console.log("direction",this.direction);
                if (dir == "up") {
                    _this.page = _this.page - 1;
                }
                else if (dir == "down") {
                    _this.page = _this.page + 1;
                }
            });
        };
    }
    /*@HostListener('window:scroll', ['$event'])
       onScroll(event) {
          //alert("scrolling");
          console.log("event inside");
          this.page=this.page+1;
      }  */
    MyPDFViewerComponent.prototype.incrementpage = function () {
        this.page = this.page + 1;
    };
    /* [show-all]="true"*/
    MyPDFViewerComponent.prototype.callBackFn = function (pdf) {
        // do anything with "pdf"
        console.log("pdf", pdf);
    };
    return MyPDFViewerComponent;
}());
MyPDFViewerComponent = __decorate([
    core_1.Component({
        selector: 'example-app',
        template: "\n  <div>\n  <div>\n      <label>PDF src</label>\n      <input type=\"text\" placeholder=\"PDF src\" [(ngModel)]=\"pdfSrc\">\n      <input type=\"button\" name=\"increment\" value=\"next\"  (click)=\"incrementpage()\"/>\n  </div>\n  <div>\n      <label>Page:</label>\n      <input type=\"number\" placeholder=\"Page\" [(ngModel)]=\"page\" >\n  </div>\n <div>\n  <pdf-viewer [src]=\"pdfSrc\" \n              [page]=\"page\" \n              [original-size]=\"true\" \n              style=\"display: block;\"\n    (after-load-complete)=\"callBackFn($event)\" ></pdf-viewer>\n    </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], MyPDFViewerComponent);
exports.MyPDFViewerComponent = MyPDFViewerComponent;
//# sourceMappingURL=pdfCiewerComponent.js.map