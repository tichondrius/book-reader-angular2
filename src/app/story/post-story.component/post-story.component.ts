import  {Component} from '@angular/core'
import ICategory from '../../category/category'
import {CategoryService} from '../../category/category.service'
import {StoryService} from '../../story/story.service'
import {OnInit, OnDestroy } from '@angular/core'

import {IPostStoryModel} from './poststory'

@Component({
    templateUrl: './post-story.component.html',
    styleUrls: ['./post-story.component.css']
})
export class PostStoryComponent implements OnInit{
    
    public success: boolean = false;
    public waitRequest: boolean = false;
    public categories: ICategory[];
    public model: IPostStoryModel = {
        name: '',
        cat: '-1',
        img_main : [{url: ''}, {url: ''}],
        img_pre :'',
        part: 0,
        text_pre: '',
        type: 1,
        content: '',
        typeupload: 1,
        file_main: undefined,
        file_pre: undefined
    };
    public messages: string[];
    constructor(private categoryService: CategoryService, private storyService: StoryService){
        
    }
    ngOnInit(): void{
        var type: number = 1;
        this.categoryService.getListByUser().subscribe(
            categories => this.categories = categories,
            err => {
                console.log(err);
            })
    }
    removeLink(index: number): void{
        if (this.model.img_main.length <= 1) return;
        this.model.img_main.splice(index, 1);
    }
    moreLinks(): void{
        this.model.img_main.push({url: ''});
    }
    onChange(value: string): void{
        if (value != '-1'){
            let cat = this.categories.find(h => h._id == value);
            if (cat){
                this.model.part = cat.totalchap + 1;
                this.model.type = cat.type;
                console.log(this.model.type);
            }

        }
        else
        {
            this.model.part = 0;
        }
    }
    onSubmit(): void{
        this.waitRequest = true;
        this.success = false;
        this.messages = [];
        this.storyService.saveStory(this.model)
            .subscribe(response => {
                this.success = true;
                this.waitRequest = false;
                this.model = {
                name: '',
                cat: '-1',
                img_main : [{url: ''}, {url: ''}],
                img_pre :'',
                part: 0,
                text_pre: '',
                type: 1,
                content: '',
                typeupload: 1,
                file_main: undefined,
                file_pre: undefined
            };
                setTimeout(() => {
                    this.success = false;
                }, 2000);
            },
            error => {
                this.messages = error.lstMessErr
                this.waitRequest = false;
            });
    }
    changeTypeUpload(type: number): void{
        this.model.typeupload = type;
    }
    regexHtml(link: string): boolean{
        var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
            var regex = new RegExp(expression);
            if (link.match(regex)) {
            return true;
            } else {
           return false;
            }
    }


}