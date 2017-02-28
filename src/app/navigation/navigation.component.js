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
var hero_form_template2_component_1 = require("../template/hero-form-template2.component");
var NavigationComponent = (function () {
    function NavigationComponent() {
        this.testData = '';
    }
    NavigationComponent.prototype.loadLargeData = function () {
        this.dataContainer.nativeElement.innerHTML = "<h2> hello large</h2>text box <input type='text' /> <hero-form-template2></hero-form-template2>";
    };
    NavigationComponent.prototype.loadData = function () {
        this.testData = "<h2> hello</h2>text box <input type='text' /> ";
    };
    return NavigationComponent;
}());
__decorate([
    core_1.ViewChild('dataContainer'),
    __metadata("design:type", core_1.ElementRef)
], NavigationComponent.prototype, "dataContainer", void 0);
NavigationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'nav-comp',
        template: "<h3 (click)=\"loadData()\">Click me</h3>\n              <h3 (click)=\"loadLargeData()\">Click large me</h3>\n                <div #dataContainer></div>\n                Data :<div [innerHTML]=\"testData | safeHtml\"></div>",
        providers: [hero_form_template2_component_1.HeroFormTemplate2Component]
    })
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map