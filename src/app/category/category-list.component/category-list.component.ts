import { Component } from '@angular/core';
import { AppConfig } from '../../codes/secrect'
import {OnInit, OnDestroy } from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import { Subscription } from 'rxjs/Rx';
import ICategory from '../../category/category';
import {CategoryService} from '../../category/category.service'

@Component({
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
    subscription: Subscription;
    public urlImg = AppConfig.urlImg;
    public lstCategories: ICategory[];
    public catID: string;
    public category: ICategory;
    constructor(private _storyService: CategoryService,
                private _categoryService: CategoryService){

    }
    ngOnInit(): void{
        this._categoryService.getList(10).subscribe(categories => {
            this.lstCategories = categories;
        }, err => {
            console.log(err);
        })
        
    }
}
