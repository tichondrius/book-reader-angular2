import {PipeTransform, Pipe} from '@angular/core'
import {IStory} from './story'
@Pipe({
    name: 'listStory'
})
export class ListStoryFilter implements PipeTransform{
    transform(value: IStory[], filterBy: string): any{
       
        return true;

    }

}