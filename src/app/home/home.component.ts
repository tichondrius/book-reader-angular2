import { Component } from '@angular/core';
import { AppConfig } from '../codes/secrect'

import {OnInit} from '@angular/core'
import {IStory} from '../story/story'
import {StoryService} from '../story/story.service'

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    public urlImg = AppConfig.urlImg;
    public lstStories: IStory[];
    public pageTitle: string = 'TruyenNham.vn';
    constructor(private _storyService: StoryService){

    }
    ngOnInit(): void{
        this._storyService.getListStoryForHome().subscribe(stories => {
            this.lstStories = stories;
            
        })
    }

}
