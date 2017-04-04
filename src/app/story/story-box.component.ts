import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core'

import  {Router} from '@angular/router'
import {OnInit} from '@angular/core'
import {IStory} from './story'
import {StoryService} from './story.service'
import {AppConfig} from '../codes/secrect'


@Component({
    templateUrl: './story-box.component.html',
    selector: 'story-box',
    styleUrls: ['./story-box.component.css']
})
export class StoryBoxComponent implements OnInit {
    public urlImg: string;
    @Input() story: IStory;
    constructor(
        private _router: Router,
        private _storyService: StoryService){   
            this.urlImg = AppConfig.urlImg;
    }
    
    ngOnInit(): void{
       
    }
}