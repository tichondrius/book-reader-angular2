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
var secrect_1 = require("../../codes/secrect");
var CategoryBoxComponent = (function () {
    function CategoryBoxComponent(_router) {
        this._router = _router;
        this.urlImg = secrect_1.AppConfig.urlImg;
    }
    CategoryBoxComponent.prototype.ngOnInit = function () {
    };
    return CategoryBoxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CategoryBoxComponent.prototype, "category", void 0);
CategoryBoxComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/category/category-box.component/category-box.component.html',
        selector: 'category-box',
        styleUrls: ['app/category/category-box.component/category-box.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], CategoryBoxComponent);
exports.CategoryBoxComponent = CategoryBoxComponent;
//# sourceMappingURL=category-box.component.js.map