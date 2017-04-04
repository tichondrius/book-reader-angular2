import {PipeTransform, Pipe} from '@angular/core'

@Pipe({
    name: 'dateShort'
})
export class DateFilter implements PipeTransform{

    transform(value: string, filterBy: string): string{
     
       var dt: Date = new Date(value);
       var rs = dt.getDate().toString() + '.' + dt.getMonth().toString() + '.' + dt.getFullYear().toString();
       return rs; 

    }

}