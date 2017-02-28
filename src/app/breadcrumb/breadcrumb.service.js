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
var BreadcrumbService = (function () {
    function BreadcrumbService(router) {
        this.router = router;
        this.labels = new Map();
    }
    BreadcrumbService.prototype.buildUrl = function (route) {
        var url = "";
        route.pathFromRoot.forEach(function (parentRoute) {
            if (parentRoute.snapshot.url.length > 0) {
                url += "/" + parentRoute.snapshot.url.map(function (segment) { return segment.path; }).join("/");
            }
        });
        return url;
    };
    BreadcrumbService.prototype.addLabel = function (route, label) {
        this.labels.set(this.buildUrl(route), label);
    };
    BreadcrumbService.prototype.getLabel = function (route) {
        var label = this.labels.get(this.buildUrl(route));
        if (!label) {
            // tslint:disable:no-string-literal
            label = route.snapshot.data["title"];
        }
        if (!label) {
            label = "unknown";
        }
        return label;
    };
    return BreadcrumbService;
}());
BreadcrumbService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], BreadcrumbService);
exports.BreadcrumbService = BreadcrumbService;
//# sourceMappingURL=breadcrumb.service.js.map