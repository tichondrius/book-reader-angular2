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
var secrect_1 = require("../../codes/secrect");
var category_service_1 = require("../../category/category.service");
var CategoryListComponent = (function () {
    function CategoryListComponent(_storyService, _categoryService) {
        this._storyService = _storyService;
        this._categoryService = _categoryService;
        this.urlImg = secrect_1.AppConfig.urlImg;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._categoryService.getList(10).subscribe(function (categories) {
            _this.lstCategories = categories;
        }, function (err) {
            console.log(err);
        });
    };
    return CategoryListComponent;
}());
CategoryListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/category/category-list.component/category-list.component.html',
        styleUrls: ['app/category/category-list.component/category-list.component.css']
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        category_service_1.CategoryService])
], CategoryListComponent);
exports.CategoryListComponent = CategoryListComponent;
//# sourceMappingURL=category-list.component.js.map