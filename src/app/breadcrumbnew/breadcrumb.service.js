"use strict";
var BreadcrumbService = (function () {
    function BreadcrumbService() {
        this.routes = [];
    }
    BreadcrumbService.prototype.get = function () {
        return this.routes;
    };
    BreadcrumbService.prototype.add = function (route) {
        var isEmpty = this.routes.length === 0;
        var any = this.routes.filter(function (c) { return route.url === c.url; }).length > 0;
        if (isEmpty) {
            this.routes.push(route);
        }
        if (!any && !isEmpty) {
            this.routes.push(route);
        }
    };
    BreadcrumbService.prototype.kill = function (index) {
        var length = this.routes.length;
        this.routes.splice(index, length - index);
    };
    return BreadcrumbService;
}());
exports.BreadcrumbService = BreadcrumbService;
//# sourceMappingURL=breadcrumb.service.js.map