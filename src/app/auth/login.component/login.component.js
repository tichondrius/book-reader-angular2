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
var auth_service_1 = require("../auth.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, _authService) {
        this.router = router;
        this._authService = _authService;
        this.success = false;
        console.log(this._authService.getAuth());
    }
    LoginComponent.prototype.Login = function () {
        var _this = this;
        this.message = undefined;
        this._authService.login(this.username, this.password)
            .subscribe(function (data) {
            _this._authService.setAuth(data);
            _this.success = true;
            setTimeout(function () { _this.router.navigate(['/home']); }, 2000);
        }, function (err) {
            _this.message = err.message;
        });
    };
    LoginComponent.prototype.RedirectHome = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-cpt',
        templateUrl: 'app/auth/login.component/login.component.html',
        styleUrls: ['app/auth/login.component/login.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map