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
var http_1 = require("@angular/http");
var TestTableComponent = (function () {
    function TestTableComponent(http) {
        this.http = http;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "email";
        this.sortOrder = "asc";
        this.isLoading = false;
        this.sortByWordLength = function (a) {
            return a.city.length;
        };
    }
    TestTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("app/datatable-angular2/data.json")
            .subscribe(function (data) {
            setTimeout(function () {
                _this.data = data.json();
            }, 1000);
        });
    };
    TestTableComponent.prototype.progressLoading = function (event) {
        var _this = this;
        this.isLoading = !this.isLoading;
        console.log("isLoading" + this.isLoading);
        setTimeout(function () { _this.isLoading = !_this.isLoading; }, 3000);
    };
    TestTableComponent.prototype.testFunc = function (item) {
        //  console.log("item id ",item.email);
    };
    TestTableComponent.prototype.toInt = function (num) {
        return +num;
    };
    TestTableComponent.prototype.remove = function (data) {
        alert(data);
        console.log("removeData", data);
    };
    return TestTableComponent;
}());
TestTableComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'angular2-datatable',
        templateUrl: './angular2-datatable.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], TestTableComponent);
exports.TestTableComponent = TestTableComponent;
//# sourceMappingURL=angular2-datatable.js.map