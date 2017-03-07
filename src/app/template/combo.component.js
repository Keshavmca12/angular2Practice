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
var ComboComponent = (function () {
    function ComboComponent() {
        this.selectedObject = '';
        this.dataObjectChange = new core_1.EventEmitter();
        this.onComboChange = new core_1.EventEmitter();
        /*constructor(){
            console.log("counter");
        }*/
    }
    ComboComponent.prototype.onChangeObj = function (newObj) {
        console.log("new", newObj);
        this.selectedObject = newObj;
        this.onComboChange.emit(this.selectedObject);
    };
    return ComboComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ComboComponent.prototype, "dataObject", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ComboComponent.prototype, "dataObjectChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ComboComponent.prototype, "onComboChange", void 0);
ComboComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'combo-compo',
        template: "\n  <div> combo component </div>\n <div class=\"form-group\">\n      <label>Theme</label>\n      <select name=\"theme\" class=\"form-control\" [ngModel]=\"selectedObject\" (ngModelChange)=\"onChangeObj($event)\">\n        <option [ngValue]=\"theme\" *ngFor=\"let theme of dataObject\" >{{theme.name}}</option>\n      </select>\n    </div>\n\n\t\t\t"
    })
], ComboComponent);
exports.ComboComponent = ComboComponent;
//# sourceMappingURL=combo.component.js.map