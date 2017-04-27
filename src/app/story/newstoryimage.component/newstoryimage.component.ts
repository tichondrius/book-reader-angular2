

import { Component, Output, Input, EventEmitter } from '@angular/core';
import { AppConfig } from '../../codes/secrect'

import {OnInit} from '@angular/core'
import {IStory} from '../../story/story'
import {StoryService} from '../../story/story.service'

@Component({
    selector: 'new-story-image',
    templateUrl: './newstoryimage.component.html',
    styleUrls: ['./newstoryimage.component.css']
})
export class NewStoryImageComponent{
    @Output() loadDone = new EventEmitter();
    @Input() forceOrder: string;
    @Input() forceOrderby: string;
    @Input() forceCategory: string;
    @Input() title: string;



    public urlImg = AppConfig.urlImg;
    public lstStories: IStory[];
    public pageTitle: string = 'TruyenNham.vn';
    public IsHaveStory: boolean = true;
    public IsLoadingMore: boolean = false;
    public IsLoadData: boolean = true;
    public orders = [
        {name: 'Theo ngày', value: "date"},
        {name: 'Theo tên', value: 'name'},
        {name: 'Theo chap', value: 'part'}
    ];
    public ordersby = [
        {name: 'Tăng', value: "asc"},
        {name: 'Giảm', value: 'desc'},
    ]
    public orderby: any = this.ordersby[1];
    public order: any = this.orders[0];
    constructor(private _storyService: StoryService){
       
    }
    ngOnInit(): void{
        if (this.forceOrder)
        {
            let _order = this.orders.find(h => h.value == this.forceOrder)
            {
                if (_order)
                {
                    this.order = _order;
                }
                
            }
        }
        if (this.forceOrderby)
        {
            let _orderBy = this.ordersby.find(h => h.value == this.forceOrderby)
            {
                if (_orderBy)
                {
                    this.orderby = _orderBy;
                }
            }
        }
        this.loadData();
    }
    loadData(): void{
        this.IsLoadData = true;
        this._storyService.getListStoryForHome(this.order.value, this.orderby.value, this.forceCategory).subscribe(stories => {
            this.lstStories = stories;
            this.loadDone.emit(true);
            this.IsLoadData = false;
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
        this.lstStories.length, this.forceCategory).subscribe(stories => {
            if (stories.length == 0)
            {
                this.IsHaveStory = false;
            }
            else this.lstStories = this.lstStories.concat(stories);
            this.IsLoadingMore = false;
        })
    }
}