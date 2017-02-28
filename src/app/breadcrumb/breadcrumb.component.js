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
var breadcrumb_service_1 = require("./breadcrumb.service");
var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(router, activatedRoute, breadcrumbLabels) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.breadcrumbLabels = breadcrumbLabels;
        this.segments = new Array();
        this.router.events
            .subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.routeChanged(event);
            }
        });
    }
    BreadcrumbsComponent.prototype.routeChanged = function (event) {
        this.segments.length = 0;
        this.generateBreadcrumbTrail(this.router.routerState.root);
    };
    BreadcrumbsComponent.prototype.generateBreadcrumbTrail = function (route) {
        var _this = this;
        route.children.forEach(function (childRoute) {
            if (childRoute.outlet === "primary") {
                if (childRoute.snapshot.url.length > 0) {
                    _this.segments.push(childRoute);
                }
                _this.generateBreadcrumbTrail(childRoute);
            }
        });
    };
    BreadcrumbsComponent.prototype.navigateTo = function (route) {
        this.router.navigateByUrl(this.breadcrumbLabels.buildUrl(route));
    };
    BreadcrumbsComponent.prototype.routeName = function (route) {
        return this.breadcrumbLabels.getLabel(route);
    };
    return BreadcrumbsComponent;
}());
BreadcrumbsComponent = __decorate([
    core_1.Component({
        selector: "breadcrumbs",
        template: "\n    <ul *ngIf=\"segments.length > 0\" class=\"breadcrumb\">\n      <li>\n        <a class=\"home\" [routerLink]=\"''\"><i class=\"material-icons\" md-icon>home</i></a>\n      </li>\n      <li *ngFor=\"let segment of segments; let last = last; let index = index;\" \n          [ngClass]=\"{'active': last}\"> <!-- disable link of last item -->\n        <a *ngIf=\"!last\" (click)=\"navigateTo(segment)\">{{ routeName(segment) }}</a>\n        <span *ngIf=\"last\">{{ routeName(segment, index) }}</span>\n      </li>\n    </ul>",
        styles: ["\n    ul.breadcrumb { padding: 10px 0; margin: 0; list-style: none; font-size: 16px;}\n    ul.breadcrumb > li { display: inline-block; vertical-align: middle; }\n    .breadcrumb > li + li:before { padding: 0 4px 0 8px; color: #ccc; content: \"/\"; }\n    a:hover { cursor: pointer; }\n    a.home { vertical-align: middle; display: inline-block; }\n    a.home i { font-size: 18px; }\n  "]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        breadcrumb_service_1.BreadcrumbService])
], BreadcrumbsComponent);
exports.BreadcrumbsComponent = BreadcrumbsComponent;
//# sourceMappingURL=breadcrumb.component.js.map