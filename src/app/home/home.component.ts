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
    isLoadStoryDone: boolean = false;
    isLoadCatDone: boolean = false;
    ngOnInit(): void{

    }
    loadStoryDone(rs: boolean){
        this.isLoadStoryDone = rs;
    }
    loadCatDone(rs: boolean){
        this.isLoadCatDone = rs;
    }
}
