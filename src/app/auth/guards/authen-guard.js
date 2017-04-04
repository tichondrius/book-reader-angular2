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
var auth_service_1 = require("../auth.service");
//Chặn nếu đăng nhập rồi
var UnAuthenGuard = (function () {
    function UnAuthenGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UnAuthenGuard.prototype.canActivate = function (route) {
        var auth = this.authService.getAuth();
        if (auth && auth.isAuth) {
            this.router.navigate(['/home']);
            return false;
        }
        else {
            return true;
        }
    };
    return UnAuthenGuard;
}());
UnAuthenGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], UnAuthenGuard);
exports.UnAuthenGuard = UnAuthenGuard;
var AuthenGuard = (function () {
    function AuthenGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthenGuard.prototype.canActivate = function (route) {
        var auth = this.authService.getAuth();
        if (auth && auth.isAuth) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthenGuard;
}());
AuthenGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], AuthenGuard);
exports.AuthenGuard = AuthenGuard;
//# sourceMappingURL=authen-guard.js.map