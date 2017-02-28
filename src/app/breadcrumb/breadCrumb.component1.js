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
var router_1 = require("@angular/router");
var BreadcrumbComponent1 = (function () {
    function BreadcrumbComponent1(_router) {
        var _this = this;
        this._router = _router;
        this._router.events.subscribe(function (eventData) {
            if (eventData instanceof router_1.RoutesRecognized) {
                var event_1 = eventData;
                var currentUrlPart = event_1.state._root;
                var currUrl = '#'; //for HashLocationStrategy
                _this.breadcrumbs = [];
                while (currentUrlPart.children.length > 0) {
                    currentUrlPart = currentUrlPart.children[0];
                    var routeSnaphot = currentUrlPart.value;
                    currUrl += '/' + routeSnaphot.url.map(function (item) {
                        return item.path;
                    }).join('/');
                    _this.breadcrumbs.push({
                        displayName: routeSnaphot.data.displayName,
                        url: currUrl,
                        params: routeSnaphot.params
                    });
                    console.log(_this.breadcrumbs);
                }
            }
        });
    }
    return BreadcrumbComponent1;
}());
BreadcrumbComponent1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], BreadcrumbComponent1);
exports.BreadcrumbComponent1 = BreadcrumbComponent1;
//# sourceMappingURL=breadCrumb.component1.js.map