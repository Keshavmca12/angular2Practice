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
var breadcrumb_service_1 = require("./breadcrumb.service");
var router_1 = require("@angular/router");
require("rxjs/add/operator/filter");
/*
uncomment to resolve module variable

 */
/*// app.component.ts
declare var module: {
  id: string;
}*/
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(breadcrumbService, router, route) {
        var _this = this;
        this.breadcrumbService = breadcrumbService;
        this.router = router;
        this.route = route;
        this.initRoutes = function () { return _this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function (event) {
            _this.routes = [];
            var currentRoute = _this.route.root;
            var _loop_1 = function () {
                var childRoutes = currentRoute.children;
                var url = '';
                var label = '';
                currentRoute = null;
                childRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        label = route.snapshot.data['title']
                            ? route.snapshot.data['title']
                            : url.split("/").pop().charAt(0).toUpperCase() + url.split("/").pop().slice(1),
                            _this.breadcrumbService.add({
                                url: url,
                                label: label
                            });
                        currentRoute = route;
                    }
                });
            };
            do {
                _loop_1();
            } while (currentRoute);
            _this.routes = _this.breadcrumbService.get();
        }); };
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        this.initRoutes();
    };
    BreadcrumbComponent.prototype.goTo = function (url) {
        var idx = this.routes.map(function (x) { return x.url; }).indexOf(url);
        this.breadcrumbService.kill(idx);
        this.routes = this.breadcrumbService.get();
        this.router.navigateByUrl(url);
    };
    return BreadcrumbComponent;
}());
BreadcrumbComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-breadcrumb',
        templateUrl: './breadcrumb.component.html',
        styleUrls: ['./breadcrumb.component.css']
    }),
    __metadata("design:paramtypes", [breadcrumb_service_1.BreadcrumbService, router_1.Router, router_1.ActivatedRoute])
], BreadcrumbComponent);
exports.BreadcrumbComponent = BreadcrumbComponent;
//# sourceMappingURL=breadcrumb.component.js.map