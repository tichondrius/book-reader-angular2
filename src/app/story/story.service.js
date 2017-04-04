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
var StoryService = (function () {
    function StoryService(_http, httpClient) {
        this._http = _http;
        this.httpClient = httpClient;
        this._hostApi = secrect_1.AppConfig.hostApi;
    }
    StoryService.prototype.getListStoryForHome = function () {
        return this._http.get(this._hostApi + 'stories/')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    StoryService.prototype.getDetailStory = function (storyID) {
        return this._http.get(this._hostApi + "stories/" + storyID)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    StoryService.prototype.getStoryByCategoryID = function (catID) {
        return this._http.get(this._hostApi + "stories?category=" + catID)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    StoryService.prototype.saveStory = function (model) {
        return this.httpClient.put(this._hostApi + "stories", model)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    StoryService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json() || 'Server error');
    };
    return StoryService;
}());
StoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, httpclient_1.HttpClient])
], StoryService);
exports.StoryService = StoryService;
//# sourceMappingURL=story.service.js.map