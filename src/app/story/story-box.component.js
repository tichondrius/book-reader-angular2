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
var story_service_1 = require("./story.service");
var secrect_1 = require("../codes/secrect");
var StoryBoxComponent = (function () {
    function StoryBoxComponent(_router, _storyService) {
        this._router = _router;
        this._storyService = _storyService;
        this.urlImg = secrect_1.AppConfig.urlImg;
    }
    StoryBoxComponent.prototype.ngOnInit = function () {
    };
    return StoryBoxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StoryBoxComponent.prototype, "story", void 0);
StoryBoxComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/story/story-box.component.html',
        selector: 'story-box',
        styleUrls: ['app/story/story-box.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        story_service_1.StoryService])
], StoryBoxComponent);
exports.StoryBoxComponent = StoryBoxComponent;
//# sourceMappingURL=story-box.component.js.map