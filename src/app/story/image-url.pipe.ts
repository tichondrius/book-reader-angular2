import {PipeTransform, Pipe} from '@angular/core'
import { AppConfig } from '../codes/secrect'
@Pipe({
    name: 'urlImg'
})
export class ImageFilter implements PipeTransform{
    
    transform(value: string, type: string): any{
        var urlImg = AppConfig.urlImg;
        if (value.indexOf("/") < 0)
             return urlImg + value;
        else {
             return value;
        }
    }
   

}