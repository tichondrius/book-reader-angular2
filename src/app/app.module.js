"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var shared_module_1 = require("./shared/shared.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var story_box_component_1 = require("./story/story-box.component");
var story_detail_component_1 = require("./story/story-detail.component");
var login_info_component_1 = require("./navbar/login-info.component");
var login_component_1 = require("./auth/login.component/login.component");
var nav_bar_top_component_1 = require("./navbar/nav-bar-top.component");
var nav_bar_left_component_1 = require("./navbar/nav-bar-left.component");
var category_nav_component_1 = require("./category/category-nav.component");
var story_category_component_1 = require("./story/story-category.component/story-category.component");
var story_type_component_1 = require("./story/story-type.component/story-type.component");
var type_nav_component_1 = require("./type/type-nav.component");
var register_component_1 = require("./auth/register.component/register.component");
var profile_component_1 = require("./auth/profile.component/profile.component");
var post_story_component_1 = require("./story/post-story.component/post-story.component");
var category_list_component_1 = require("./category/category-list.component/category-list.component");
var category_box_component_1 = require("./category/category-box.component/category-box.component");
var story_box_filter_pipe_1 = require("./story/story-box-filter.pipe");
var date_iso_filter_pipe_1 = require("./story/date-iso-filter.pipe");
var image_url_pipe_1 = require("./story/image-url.pipe");
var story_service_1 = require("./story/story.service");
var category_service_1 = require("./category/category.service");
var type_service_1 = require("./type/type.service");
var auth_service_1 = require("./auth/auth.service");
var user_service_1 = require("./user/user.service");
var httpclient_1 = require("./httpclient");
var truncate_pipe_1 = require("./story/truncate.pipe");
var authen_guard_1 = require("./auth/guards/authen-guard");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule,
            shared_module_1.SharedModule,
            router_1.RouterModule.forRoot([
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'login', canActivate: [authen_guard_1.UnAuthenGuard], component: login_component_1.LoginComponent },
                { path: 'profile', canActivate: [authen_guard_1.AuthenGuard], component: profile_component_1.ProfileComponent },
                { path: 'register', canActivate: [authen_guard_1.UnAuthenGuard], component: register_component_1.RegisterComponent },
                { path: 'story/post', canActivate: [authen_guard_1.AuthenGuard], component: post_story_component_1.PostStoryComponent },
                { path: 'categories', component: category_list_component_1.CategoryListComponent },
                { path: 'stories/:storyID', component: story_detail_component_1.StoryDetailComponent },
                { path: 'categories/:catID', component: story_category_component_1.StoryCategoryComponent },
                { path: 'types/:typeID', component: story_type_component_1.StoryTypeConponent },
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: '**', redirectTo: 'home', pathMatch: 'full' }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            story_box_component_1.StoryBoxComponent,
            story_detail_component_1.StoryDetailComponent,
            date_iso_filter_pipe_1.DateFilter,
            story_box_filter_pipe_1.ListStoryFilter,
            image_url_pipe_1.ImageFilter,
            nav_bar_top_component_1.NavBarTopComponent,
            nav_bar_left_component_1.NavBarLeftComponent,
            category_nav_component_1.CategoryNavComponent,
            story_category_component_1.StoryCategoryComponent,
            type_nav_component_1.TypeNavComponent,
            story_type_component_1.StoryTypeConponent,
            login_component_1.LoginComponent,
            login_info_component_1.LoginInfoComponent,
            register_component_1.RegisterComponent,
            profile_component_1.ProfileComponent,
            post_story_component_1.PostStoryComponent,
            category_list_component_1.CategoryListComponent,
            category_box_component_1.CategoryBoxComponent,
            truncate_pipe_1.TruncatePipe
        ],
        providers: [story_service_1.StoryService, category_service_1.CategoryService, type_service_1.TypeService,
            auth_service_1.AuthService, authen_guard_1.UnAuthenGuard, authen_guard_1.AuthenGuard,
            user_service_1.UserService, httpclient_1.HttpClient],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map