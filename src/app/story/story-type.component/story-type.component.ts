import { Component } from '@angular/core';
import { AppConfig } from '../../codes/secrect'
import {OnInit, OnDestroy } from '@angular/core'
import {IType} from '../../type/type'
import {IStory} from '../story'
import ICategory from '../../category/category'
import {TypeService} from '../../type/type.service'
import {ActivatedRoute} from '@angular/router'
import { Subscription } from 'rxjs/Rx';
import {CategoryService} from '../../category/category.service'

@Component({
    templateUrl: './story-type.component.html'
})
export class StoryTypeConponent implements OnInit {
    subscription: Subscription;
    public urlImg = AppConfig.urlImg;
    public typeID: string;
    public type: IType;
    public lstStories: IStory[];
    constructor(private _typeService: TypeService,
                private route: ActivatedRoute){

    }
    ngOnInit(): void{
        this.subscription = this.route.params.subscribe(params => {
            this.type = undefined;
            this.typeID = undefined;
            this.typeID = params['typeID'];
            //get story by category id
            this._typeService.getInfoByID(this.typeID)
                .subscribe(type => {
                    this.type = type;
                    this.lstStories = [];
                    type.categories.forEach((value) => {
                        this.lstStories = this.lstStories.concat(value.stories);       
                    })

                    console.log(this.type);
                });
           
        
        });
        
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
