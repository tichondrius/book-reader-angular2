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
var httpclient_1 = require("../httpclient");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var secrect_1 = require("../codes/secrect");
var CategoryService = (function () {
    function CategoryService(_http, _httpauth) {
        this._http = _http;
        this._httpauth = _httpauth;
        this._hostApi = secrect_1.AppConfig.hostApi;
    }
    CategoryService.prototype.getList = function (Qty) {
        return this._http.get(this._hostApi + "categories/")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CategoryService.prototype.getListByUser = function (type) {
        return this._httpauth.get(this._hostApi + "categories/getbyuser?type=" + type)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CategoryService.prototype.getListForNav = function () {
        return this._http.get(this._hostApi + 'categories/fornav')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CategoryService.prototype.getCategoryById = function (catID) {
        return this._http.get(this._hostApi + 'categories/' + catID)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CategoryService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json() || 'Server error');
    };
    return CategoryService;
}());
CategoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, httpclient_1.HttpClient])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map