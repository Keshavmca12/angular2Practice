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
var datatable_data_1 = require("./datatable.data");
var TableDemoComponent = (function () {
    function TableDemoComponent() {
        this.rows = [];
        this.columns = [
            { title: 'Name', name: 'name' },
            { title: 'Position', name: 'position', sort: false },
            { title: 'Office', name: 'office', sort: 'asc' },
            { title: 'Extn.', name: 'ext', sort: '' },
            { title: 'Start date', name: 'startDate' },
            { title: 'Salary ($)', name: 'salary' }
        ];
        this.page = 1;
        this.itemsPerPage = 10;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '', columnName: 'position' }
        };
        this.data = datatable_data_1.TableData;
        this.length = this.data.length;
    }
    TableDemoComponent.prototype.ngOnInit = function () {
        this.onChangeTable(this.config);
    };
    TableDemoComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.data; }
        console.log(page);
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    TableDemoComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '') {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    TableDemoComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        if (!config.filtering) {
            return data;
        }
        var filteredData = data.filter(function (item) {
            return item[config.filtering.columnName].match(_this.config.filtering.filterString);
        });
        return filteredData;
    };
    TableDemoComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.data, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    return TableDemoComponent;
}());
TableDemoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'table-demo',
        templateUrl: './datatable.html',
    }),
    __metadata("design:paramtypes", [])
], TableDemoComponent);
exports.TableDemoComponent = TableDemoComponent;
//# sourceMappingURL=datatable.component.js.map