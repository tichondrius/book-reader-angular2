import {Component, Input, OnInit} from '@angular/core'
@Component({
    selector: 'story-content',
    templateUrl : './story-content.component.html',
    styleUrls: ['./story-content.component.css']
})
export class StoryContentComponent{
    @Input() content: string;
    public lstContent : string[] = [];
    public innerContent: string = '';
    ngOnInit(): void{
        this.innerContent = this.content;
    }

}