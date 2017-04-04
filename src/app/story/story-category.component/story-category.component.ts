import { Component } from '@angular/core';
import { AppConfig } from '../../codes/secrect'
import {OnInit, OnDestroy } from '@angular/core'
import {IStory} from '../story'
import {StoryService} from '../story.service'
import {ActivatedRoute} from '@angular/router'
import { Subscription } from 'rxjs/Rx';
import ICategory from '../../category/category';
import {CategoryService} from '../../category/category.service'

@Component({
    templateUrl: './story-category.component.html',
    styleUrls: ['./story-category.component.css']
})
export class StoryCategoryComponent implements OnInit {
    subscription: Subscription;
    public urlImg = AppConfig.urlImg;
    public lstStories: IStory[];
    public catID: string;
    public category: ICategory;
    constructor(private _storyService: StoryService,
                private route: ActivatedRoute,
                private _categoryService: CategoryService){

    }
    ngOnInit(): void{
        this.subscription = this.route.params.subscribe(params => {
            this.category = undefined;
            this.lstStories = undefined;
            this.catID = params['catID'];
            //get story by category id
            this._storyService.getStoryByCategoryID(this.catID)
                .subscribe(stories => this.lstStories = stories);
            //get category info by category id
            this._categoryService.getCategoryById(this.catID)
                .subscribe(category => this.category = category);
        
        });
        
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
