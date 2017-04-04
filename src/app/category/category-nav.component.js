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
var category_service_1 = require("./category.service");
var router_1 = require("@angular/router");
var CategoryNavComponent = (function () {
    function CategoryNavComponent(_categoryService, _router) {
        this._categoryService = _categoryService;
        this._router = _router;
    }
    CategoryNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._categoryService.getListForNav().subscribe(function (categories) { return _this.categories = categories; });
    };
    return CategoryNavComponent;
}());
CategoryNavComponent = __decorate([
    core_1.Component({
        selector: '[categoryNav]',
        templateUrl: 'app/category/category-nav.component.html'
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService, router_1.Router])
], CategoryNavComponent);
exports.CategoryNavComponent = CategoryNavComponent;
//# sourceMappingURL=category-nav.component.js.map