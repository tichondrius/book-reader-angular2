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
var type_service_1 = require("./type.service");
var router_1 = require("@angular/router");
var TypeNavComponent = (function () {
    function TypeNavComponent(_typeService, _router) {
        this._typeService = _typeService;
        this._router = _router;
    }
    TypeNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._typeService.getListForNav().subscribe(function (types) { return _this.types = types; });
    };
    return TypeNavComponent;
}());
TypeNavComponent = __decorate([
    core_1.Component({
        selector: '[typeNav]',
        templateUrl: 'app/type/type-nav.component.html'
    }),
    __metadata("design:paramtypes", [type_service_1.TypeService, router_1.Router])
], TypeNavComponent);
exports.TypeNavComponent = TypeNavComponent;
//# sourceMappingURL=type-nav.component.js.map