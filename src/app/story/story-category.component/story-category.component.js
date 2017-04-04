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
var story_service_1 = require("../story.service");
var router_1 = require("@angular/router");
var category_service_1 = require("../../category/category.service");
var StoryCategoryComponent = (function () {
    function StoryCategoryComponent(_storyService, route, _categoryService) {
        this._storyService = _storyService;
        this.route = route;
        this._categoryService = _categoryService;
        this.urlImg = secrect_1.AppConfig.urlImg;
    }
    StoryCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.category = undefined;
            _this.lstStories = undefined;
            _this.catID = params['catID'];
            //get story by category id
            _this._storyService.getStoryByCategoryID(_this.catID)
                .subscribe(function (stories) { return _this.lstStories = stories; });
            //get category info by category id
            _this._categoryService.getCategoryById(_this.catID)
                .subscribe(function (category) { return _this.category = category; });
        });
    };
    StoryCategoryComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return StoryCategoryComponent;
}());
StoryCategoryComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/story/story-category.component/story-category.component.html',
        styleUrls: ['app/story/story-category.component/story-category.component.css']
    }),
    __metadata("design:paramtypes", [story_service_1.StoryService,
        router_1.ActivatedRoute,
        category_service_1.CategoryService])
], StoryCategoryComponent);
exports.StoryCategoryComponent = StoryCategoryComponent;
//# sourceMappingURL=story-category.component.js.map