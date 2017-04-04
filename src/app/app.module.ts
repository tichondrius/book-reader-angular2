import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http'
import { ProductModule} from './products/product.module'
import {RouterModule} from '@angular/router'
import {SharedModule} from './shared/shared.module'

import { AppComponent }  from './app.component';
import {HomeComponent} from './home/home.component'
import {StoryBoxComponent} from './story/story-box.component'
import {StoryDetailComponent} from './story/story-detail.component'
import {LoginInfoComponent} from './navbar/login-info.component'
import {LoginComponent} from './auth/login.component/login.component'
import {NavBarTopComponent} from './navbar/nav-bar-top.component'
import {NavBarLeftComponent} from './navbar/nav-bar-left.component'
import {CategoryNavComponent} from './category/category-nav.component'
import {StoryCategoryComponent} from './story/story-category.component/story-category.component'
import {StoryTypeConponent} from './story/story-type.component/story-type.component'
import {TypeNavComponent} from './type/type-nav.component'
import {RegisterComponent} from './auth/register.component/register.component'
import {ProfileComponent} from './auth/profile.component/profile.component'
import {PostStoryComponent} from './story/post-story.component/post-story.component'
import {CategoryListComponent} from './category/category-list.component/category-list.component'
import {CategoryBoxComponent} from './category/category-box.component/category-box.component'
import {PostCategoryComponent} from './category/post-category.component/post-category.component'

import {ListStoryFilter} from './story/story-box-filter.pipe'
import {DateFilter} from './story/date-iso-filter.pipe'
import {ImageFilter} from './story/image-url.pipe'
import {StoryService} from './story/story.service'
import {CategoryService} from './category/category.service'
import {TypeService} from './type/type.service'
import {AuthService} from './auth/auth.service'
import {UserService} from './user/user.service'
import {HttpClient} from './httpclient'
import {TruncatePipe} from './story/truncate.pipe'
import {AuthenGuard, UnAuthenGuard} from './auth/guards/authen-guard'

@NgModule({
  imports: [ BrowserModule,
        HttpModule,
        SharedModule,
        RouterModule.forRoot([
          { path: 'home', component: HomeComponent},
          { path: 'login',  canActivate: [UnAuthenGuard], component: LoginComponent},
          { path: 'profile',  canActivate: [AuthenGuard], component: ProfileComponent},
          { path: 'register', canActivate: [UnAuthenGuard], component: RegisterComponent},
          { path: 'stories/post', canActivate: [AuthenGuard], component: PostStoryComponent},
          { path: 'categories', component: CategoryListComponent},
          { path: 'categories/post', canActivate: [AuthenGuard],component: PostCategoryComponent},
          { path: 'stories/:storyID', component: StoryDetailComponent },
          { path: 'categories/:catID', component: StoryCategoryComponent},
          { path: 'types/:typeID', component: StoryTypeConponent},
          { path: '', redirectTo: 'home', pathMatch: 'full'},
          { path: '**', redirectTo: 'home', pathMatch: 'full'}], {useHash: true})
        ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    StoryBoxComponent,
    StoryDetailComponent,
    DateFilter,
    ListStoryFilter,
    ImageFilter,
    NavBarTopComponent,
    NavBarLeftComponent,
    CategoryNavComponent,
    StoryCategoryComponent,
    TypeNavComponent,
    StoryTypeConponent,
    LoginComponent,
    LoginInfoComponent,
    RegisterComponent,
    ProfileComponent,
    PostStoryComponent,
    CategoryListComponent,
    PostCategoryComponent,
    CategoryBoxComponent,
    TruncatePipe
   ],
  providers: [StoryService, CategoryService, TypeService,
   AuthService, UnAuthenGuard, AuthenGuard,
   UserService, HttpClient],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
