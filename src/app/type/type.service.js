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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var secrect_1 = require("../codes/secrect");
var TypeService = (function () {
    function TypeService(_http) {
        this._http = _http;
        this._hostApi = secrect_1.AppConfig.hostApi;
    }
    TypeService.prototype.getListForNav = function () {
        return this._http.get(this._hostApi + "types")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TypeService.prototype.getInfoByID = function (typeID) {
        return this._http.get(this._hostApi + "types/GetStoryByTypeId/" + typeID)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    TypeService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return TypeService;
}());
TypeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TypeService);
exports.TypeService = TypeService;
//# sourceMappingURL=type.service.js.map