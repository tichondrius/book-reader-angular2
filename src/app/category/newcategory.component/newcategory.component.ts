

import { Component } from '@angular/core';
import { AppConfig } from '../../codes/secrect'

import {OnInit, Output, EventEmitter} from '@angular/core'
import ICategory from '../../category/category'
import {CategoryService} from '../../category/category.service'

@Component({
    selector: 'new-cat-list',
    templateUrl: './newcategory.component.html',
    styleUrls: ['./newcategory.component.css']
})
export class NewCatListComponent{
    @Output() loadDone = new EventEmitter();
    public urlImg = AppConfig.urlImg;
    public lstCategories: ICategory[];
    public pageTitle: string = 'TruyenNham.vn';
    public IsHaveStory: boolean = true;
    public IsLoadingMore: boolean = false;
    public orders: any = [
        {name: 'Theo ngày', value: "dateUpdate"},
        {name: 'Theo tên', value: 'name'},
    ];
    public ordersby: any = [
        {name: 'Tăng', value: "asc"},
        {name: 'Giảm', value: 'desc'},
    ]
    public orderby: any = this.ordersby[1];
    public order: any = this.orders[0];
    constructor(private _categoryService: CategoryService){

    }
    ngOnInit(): void{
        this.loadData();
    }
    loadData(): void{
        this.lstCategories = undefined;

        this._categoryService.getListForHome(this.order.value, this.orderby.value).subscribe(categories => {
            this.lstCategories = categories;
            this.loadDone.emit(true);
        })
    }
    onChangeOrder(i: any): void{
        this.order = i;
        this.loadData();
    }
    onChangeOrderby(i: any): void{
        this.orderby = i;
        this.loadData();
    }
    getMoreStories(): void{
        this.IsLoadingMore = true;
        this._categoryService.getMoreForHome(this.order.value,
        this.orderby.value, 
        this.lstCategories.length).subscribe(stories => {
            if (stories.length == 0)
            {
                this.IsHaveStory = false;
            }
            else this.lstCategories = this.lstCategories.concat(stories);
            this.IsLoadingMore = false;
        })
    }
}