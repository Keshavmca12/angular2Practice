"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var hero_1 = require("../shared/hero");
var TestForm = (function () {
    function TestForm() {
        this.myData = [];
        this.auxDataSet = {};
        this.auxData = [];
        // trigger-variable for Ladda
        this.isLoading = false;
        this.testVar = " tstevarkeshav";
        this.hero = new hero_1.Hero(18, 'Dr. WhatIsHisWayTooLongName', '', 'Dr. What');
    }
    TestForm.prototype.toggleLoading = function () {
        this.isLoading = !this.isLoading;
    };
    TestForm.prototype.loadData = function () {
        this.myData = [
            {
                'name': 'Victoria Cantrell',
                'position': 'Integer Corporation',
                'office': 'Croatia',
                'ext': '0839',
                'startDate': '2015/08/19',
                'salary': 208.178
            }, {
                'name': 'Pearl Crosby',
                'position': 'In PC',
                'office': 'Cambodia',
                'ext': '8262',
                'startDate': '2014/10/08',
                'salary': 114.367
            }, {
                'name': 'Colette Foley',
                'position': 'Lorem Inc.',
                'office': 'Korea, North',
                'ext': '8968',
                'startDate': '2015/07/19',
                'salary': 721.473
            }
        ];
        console.log(this.myData);
    };
    TestForm.prototype.loadAuxData = function () {
        this.auxDataSet =
            {
                '0839': [{
                        'name': 'Aux Victoria Cantrell',
                        'position': 'Integer Corporation',
                        'office': 'Croatia',
                        'ext': '0839',
                        'startDate': '2015/08/19',
                        'salary': 208.178
                    }, {
                        'name': 'Aux Pearl Crosby',
                        'position': 'In PC',
                        'office': 'Cambodia',
                        'ext': '8262',
                        'startDate': '2014/10/08',
                        'salary': 114.367
                    }
                ],
                '8968': [{
                        'name': 'Colette Foley',
                        'position': 'Lorem Inc.',
                        'office': 'Korea, North',
                        'ext': '8968',
                        'startDate': '2015/07/19',
                        'salary': 721.473
                    }, {
                        'name': 'Liberty Gallegos',
                        'position': 'Nec Diam LLC',
                        'office': 'Ghana',
                        'ext': '9266',
                        'startDate': '2015/06/18',
                        'salary': 554.375
                    }, {
                        'name': 'Dennis York',
                        'position': 'Nullam Suscipit Foundation',
                        'office': 'Namibia',
                        'ext': '3133',
                        'startDate': '2015/03/20',
                        'salary': 90.417
                    }
                ]
            };
    };
    TestForm.prototype.handleUserUpdated = function (event) {
        alert("changing");
        console.log("in changing", event);
        console.log("in changing ext", event.ext);
        console.log("in changing this.auxDataSet", this.auxDataSet);
        this.auxData = this.auxDataSet[event.ext];
        console.log("in changing auxData", this.auxData);
        // Handle the event
    };
    TestForm.prototype.handleauxUpdated = function (event) {
        alert("changing aux");
        console.log("in changing aux", event);
        // Handle the event
    };
    TestForm.prototype.getData = function ($event) {
        console.log("in data", $event);
        alert("{loading data");
    };
    TestForm.prototype.ngOnInit = function () {
        this.loadData();
        this.loadAuxData();
        console.log("ng omn init", this.auxDataSet);
        // Properties are resolved and things like
        // this.mapWindow and this.mapControls
        // had a chance to resolve from the
        // two child components <map-window> and <map-controls>
    };
    return TestForm;
}());
TestForm = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'test-form',
        template: "\n  <combo-compo  [(dataObject)]=\"myData\" (onComboChange)=\"handleUserUpdated($event)\"></combo-compo>\n\n<combo-compo  [(dataObject)]=\"auxData\" (onComboChange)=\"handleauxUpdated($event)\"></combo-compo>\n\n <h1>Home Component</h1>\n        <button (click)=\"toggleLoading()\">Toggle Ladda in button below</button>\n        <hr>\n        <button [ladda]=\"isLoading\">Save</button>\n  \n<h1>Test form</h1><form>\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n  {{testVar}}\n        <input type=\"text\" id=\"name\" class=\"form-control\"\n               required minlength=\"4\" maxlength=\"24\"\n               name=\"name\" [(ngModel)]=\"username\" #name1=\"ngModel\"\n               />\n{{username}}\n       <div *ngIf=\"name1.errors && (name1.dirty || name1.touched)\"\n             class=\"alert alert-danger\">\n            <div [hidden]=\"!name1.errors.required\">\n              Name is required\n            </div>\n            <div [hidden]=\"!name1.errors.minlength\">\n              Name must be at least 4 characters long.\n            </div>\n            <div [hidden]=\"!name1.errors.maxlength\">\n              Name cannot be more than 24 characters long.\n            </div>\n        </div>\n      </div></form>"
    })
], TestForm);
exports.TestForm = TestForm;
//# sourceMappingURL=test.form.component.js.map