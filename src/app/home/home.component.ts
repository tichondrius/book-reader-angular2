import { Component } from '@angular/core';
import { AppConfig } from '../codes/secrect'

import {OnInit} from '@angular/core'
import {IStory} from '../story/story'
import {StoryService} from '../story/story.service'

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public urlImg = AppConfig.urlImg;
    public lstStories: IStory[];
    public pageTitle: string = 'TruyenNham.vn';
    public IsHaveStory: boolean = true;
    public IsLoadingMore: boolean = false;
    public orders: any = [
        {name: 'Theo ngày', value: "date"},
        {name: 'Theo tên', value: 'name'},
        {name: 'Theo chap', value: 'part'}
    ];
    public ordersby: any = [
        {name: 'Tăng', value: "asc"},
        {name: 'Giảm', value: 'desc'},
    ]
    public orderby: any = this.ordersby[1];
    public order: any = this.orders[0];
    constructor(private _storyService: StoryService){

    }
    ngOnInit(): void{
        this.loadData();
    }
    loadData(): void{
        this.lstStories = undefined;
        this._storyService.getListStoryForHome(this.order.value, this.orderby.value).subscribe(stories => {
            this.lstStories = stories;
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
        this._storyService.getMoreStoryForHome(this.order.value,
        this.orderby.value, 
        this.lstStories.length).subscribe(stories => {
            if (stories.length == 0)
            {
                this.IsHaveStory = false;
            }
            else this.lstStories = this.lstStories.concat(stories);
            this.IsLoadingMore = false;
        })
    }
}
