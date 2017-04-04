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
var category_service_1 = require("../../category/category.service");
var story_service_1 = require("../../story/story.service");
var PostStoryComponent = (function () {
    function PostStoryComponent(categoryService, storyService) {
        this.categoryService = categoryService;
        this.storyService = storyService;
        this.success = false;
        this.waitRequest = false;
        this.model = {
            name: '',
            cat: '-1',
            img_main: [{ url: '' }, { url: '' }],
            img_pre: '',
            part: 0,
            text_pre: '',
            type: 0
        };
    }
    PostStoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var type = 1;
        this.categoryService.getListByUser(type).subscribe(function (categories) { return _this.categories = categories; }, function (err) {
            console.log(err);
        });
    };
    PostStoryComponent.prototype.removeLink = function (index) {
        if (this.model.img_main.length <= 1)
            return;
        this.model.img_main.splice(index, 1);
    };
    PostStoryComponent.prototype.moreLinks = function () {
        this.model.img_main.push({ url: '' });
    };
    PostStoryComponent.prototype.onChange = function (value) {
        if (value != '-1') {
            var cat = this.categories.find(function (h) { return h._id == value; });
            if (cat) {
                this.model.part = cat.totalchap + 1;
            }
        }
        else {
            this.model.part = 0;
        }
    };
    PostStoryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.waitRequest = true;
        this.success = false;
        this.messages = [];
        this.storyService.saveStory(this.model)
            .subscribe(function (response) {
            _this.success = true;
            _this.waitRequest = false;
            _this.model = {
                name: '',
                cat: '-1',
                img_main: [{ url: '' }, { url: '' }],
                img_pre: '',
                part: 0,
                text_pre: '',
                type: 0
            };
            setTimeout(function () {
                _this.success = false;
            }, 2000);
        }, function (error) {
            _this.messages = error.lstMessErr;
            _this.waitRequest = false;
        });
    };
    PostStoryComponent.prototype.regexHtml = function (link) {
        var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);
        if (link.match(regex)) {
            return true;
        }
        else {
            return false;
        }
    };
    return PostStoryComponent;
}());
PostStoryComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/story/post-story.component/post-story.component.html',
        styleUrls: ['app/story/post-story.component/post-story.component.css']
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService, story_service_1.StoryService])
], PostStoryComponent);
exports.PostStoryComponent = PostStoryComponent;
//# sourceMappingURL=post-story.component.js.map