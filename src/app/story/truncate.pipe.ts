import {Pipe} from '@angular/core'

@Pipe({
  name: 'truncate'
})
export class TruncatePipe {
  transform(value: string, enable: boolean, number: number) : string {
    if (enable){
        if (value.length > number){
           return value.substr(0, number) + '...';
        }
        else {
           return value;
        }
    }
    else return value;
  }
}