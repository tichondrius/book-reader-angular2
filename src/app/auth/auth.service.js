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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var secrect_1 = require("../codes/secrect");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.hostApi = secrect_1.AppConfig.backend;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        var authLS = localStorage.getItem('auth');
        if (authLS) {
            this.auth = JSON.parse(authLS);
        }
        else {
            this.auth = { isAuth: false, name: '', username: '', token: '' };
        }
    }
    AuthService.prototype.login = function (username, password) {
        return this.http.post(this.hostApi + "token", { username: username, password: password }, { headers: this.headers })
            .map(function (response) { return response.json(); })
            .catch((this.handleError));
    };
    AuthService.prototype.register = function (model) {
        return this.http.post(this.hostApi + "api/auth/register", model)
            .map(function (response) { return response; })
            .catch((this.handleError));
    };
    AuthService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json() || 'Server error');
    };
    AuthService.prototype.getAuth = function () {
        return this.auth;
    };
    AuthService.prototype.setAuth = function (data) {
        this.auth.isAuth = true;
        this.auth.name = data.name;
        this.auth.username = data.username;
        this.auth.token = data.token;
        localStorage.setItem('auth', JSON.stringify(this.auth));
    };
    AuthService.prototype.logOut = function () {
        this.auth.isAuth = false;
        this.auth.name = '';
        this.auth.username = '';
        this.auth.token = '';
        localStorage.removeItem('auth');
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map