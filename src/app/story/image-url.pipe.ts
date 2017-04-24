import {PipeTransform, Pipe} from '@angular/core'
import { AppConfig } from '../codes/secrect'
@Pipe({
    name: 'urlImg'
})
export class ImageFilter implements PipeTransform{
    
    transform(value: string, imgmax: string,  crop: string): any{
         if (imgmax)
         {
             value = `${value}?imgmax=${imgmax}`;
         }
         if (crop)
         {
            value = `${value}?crop=${crop}`;
         }
         return value;
    }
   

}