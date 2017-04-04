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
var auth_service_1 = require("../auth/auth.service");
var router_1 = require("@angular/router");
var LoginInfoComponent = (function () {
    function LoginInfoComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.auth = this._authService.getAuth();
    }
    LoginInfoComponent.prototype.logOut = function () {
        this._authService.logOut();
        this._router.navigate(['/home']);
    };
    return LoginInfoComponent;
}());
LoginInfoComponent = __decorate([
    core_1.Component({
        selector: '[login-info-nav]',
        templateUrl: 'app/navbar/login-info.component.html',
        styleUrls: ['app/navbar/login-info.component.css']
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        router_1.Router])
], LoginInfoComponent);
exports.LoginInfoComponent = LoginInfoComponent;
//# sourceMappingURL=login-info.component.js.map