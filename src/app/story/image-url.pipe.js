"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var secrect_1 = require("../codes/secrect");
var ImageFilter = (function () {
    function ImageFilter() {
    }
    ImageFilter.prototype.transform = function (value, type) {
        var urlImg = secrect_1.AppConfig.urlImg;
        if (value.indexOf("/") < 0)
            return urlImg + value;
        else {
            return value;
        }
    };
    return ImageFilter;
}());
ImageFilter = __decorate([
    core_1.Pipe({
        name: 'urlImg'
    })
], ImageFilter);
exports.ImageFilter = ImageFilter;
//# sourceMappingURL=image-url.pipe.js.map