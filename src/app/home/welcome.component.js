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
var story_service_1 = require("../story/story.service");
var WelcomeComponent = (function () {
    function WelcomeComponent(_storyService) {
        this._storyService = _storyService;
        this.urlImg = secrect_1.AppConfig.urlImg;
        this.pageTitle = 'TruyenNham.vn';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._storyService.getListStoryForHome().subscribe(function (stories) {
            _this.lstStories = stories;
            console.log(stories);
        });
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/home/welcome.component.html'
    }),
    __metadata("design:paramtypes", [story_service_1.StoryService])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map