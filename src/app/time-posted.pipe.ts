import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePosted'
})
export class TimePostedPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
