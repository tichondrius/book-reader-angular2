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
var type_service_1 = require("../../type/type.service");
var router_1 = require("@angular/router");
var StoryTypeConponent = (function () {
    function StoryTypeConponent(_typeService, route) {
        this._typeService = _typeService;
        this.route = route;
        this.urlImg = secrect_1.AppConfig.urlImg;
    }
    StoryTypeConponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.type = undefined;
            _this.typeID = undefined;
            _this.typeID = params['typeID'];
            //get story by category id
            _this._typeService.getInfoByID(_this.typeID)
                .subscribe(function (type) {
                _this.type = type;
                _this.lstStories = [];
                type.categories.forEach(function (value) {
                    _this.lstStories = _this.lstStories.concat(value.stories);
                });
                console.log(_this.type);
            });
        });
    };
    StoryTypeConponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return StoryTypeConponent;
}());
StoryTypeConponent = __decorate([
    core_1.Component({
        templateUrl: 'app/story/story-type.component/story-type.component.html'
    }),
    __metadata("design:paramtypes", [type_service_1.TypeService,
        router_1.ActivatedRoute])
], StoryTypeConponent);
exports.StoryTypeConponent = StoryTypeConponent;
//# sourceMappingURL=story-type.component.js.map