import { Component } from '@angular/core';
import { AppConfig } from '../../codes/secrect'
import {ActivatedRoute, Router} from '@angular/router'
import {OnInit} from '@angular/core'
import {IStory} from '../story'
import {StoryService} from '../story.service'

@Component({
    templateUrl: './story-detail.component.html',
    styleUrls: ['./story-detail.component.css']
})
export class StoryDetailComponent implements OnInit {
    public urlImg = AppConfig.urlImg;
    public story: IStory;
    constructor(private _storyService: StoryService,
        private _route: ActivatedRoute){

    }
    ngOnInit(): void{
        var id: string = this._route.snapshot.params['storyID'];
        this._storyService.getDetailStory(id).subscribe(story => {

            this.story = story
            console.log(story);
        });
    }

}
