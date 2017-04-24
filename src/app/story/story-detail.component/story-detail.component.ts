import { Component } from '@angular/core';
import { AppConfig } from '../../codes/secrect'
import {ActivatedRoute, Router} from '@angular/router'
import {OnInit} from '@angular/core'
import {IStory} from '../story'
import {StoryService} from '../story.service'
import { Subscription } from 'rxjs/Rx';
@Component({
    templateUrl: './story-detail.component.html',
    styleUrls: ['./story-detail.component.css']
})
export class StoryDetailComponent implements OnInit {
    public urlImg = AppConfig.urlImg;
    public story: IStory;
    public nextStory: IStory;
    public prevStory: IStory;
    constructor(private _storyService: StoryService,
        private _route: ActivatedRoute){

    }
    subscription: Subscription;
    ngOnDestroy(): void{
         this.subscription.unsubscribe();
    }
    ngOnInit(): void{
         this.subscription = this._route.params.subscribe(params => {
            this.story = undefined;
            this.nextStory = undefined;
            this.prevStory = undefined;
            var id: string = this._route.snapshot.params['storyID'];
            this.nextStory = null;
            this.prevStory = null;
            this._storyService.getDetailStory(id).subscribe(story => {
                this.story = story
                var recentStories = story.cat.stories;
                if (recentStories && recentStories.length){
                    recentStories.forEach(h => {
                        if (h.part == this.story.part + 1)
                        {
                            this.nextStory = h;
                        }
                        else if (h.part == this.story.part - 1)
                        {
                            this.prevStory = h;
                        }
                    })
                }
            });
        
        });
        
       
    }

}
