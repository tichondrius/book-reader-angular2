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
    public ntruncate: number = 150;
    public enableTruncate: boolean = true;
    public urlImg = AppConfig.urlImg;
    public catID: string;
    public category: ICategory;
    public lstChaps: IStory[];
    isLoadStoryDone: boolean = false;
    public collapse = false;
    constructor(private _storyService: StoryService,
                private route: ActivatedRoute,
                private _categoryService: CategoryService){

    }
    collapseChaps():void{
        this.collapse = !this.collapse;
    }
    loadStoryDone(value: boolean)
    {
        this.isLoadStoryDone = value;
    }
    ngOnInit(): void{
        this.subscription = this.route.params.subscribe(params => {
            this.category = undefined;
            this.catID = params['catID'];
         
            //get category info by category id
            this._categoryService.getCategoryById(this.catID)
                .subscribe(category => {
                    this.category = category;
                    this.lstChaps = category.stories;
                    console.log(this.lstChaps);
                });
        
        });
        
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    clickMore(): void{
        this.enableTruncate = false;
    }
    clickHide(): void{
        this.enableTruncate = true;
    }

}
