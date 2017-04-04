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
var secrect_1 = require("../codes/secrect");
var router_1 = require("@angular/router");
var story_service_1 = require("./story.service");
var StoryDetailComponent = (function () {
    function StoryDetailComponent(_storyService, _route) {
        this._storyService = _storyService;
        this._route = _route;
        this.urlImg = secrect_1.AppConfig.urlImg;
    }
    StoryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.params['storyID'];
        this._storyService.getDetailStory(id).subscribe(function (story) {
            _this.story = story;
            console.log(story);
        });
    };
    return StoryDetailComponent;
}());
StoryDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/story/story-detail.component.html',
        styleUrls: ['app/story/story-detail.component.css']
    }),
    __metadata("design:paramtypes", [story_service_1.StoryService,
        router_1.ActivatedRoute])
], StoryDetailComponent);
exports.StoryDetailComponent = StoryDetailComponent;
//# sourceMappingURL=story-detail.component.js.map