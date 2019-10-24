import { Pipe, PipeTransform } from '@angular/core';

//Register SummaryPipe in app.module.ts
@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  // transform is the inherited method from PipeTransform that takes in value as input
  // limit? means limit is an optional argument
  transform(value: any, limit?: number): any {
    if (!value)
      return null;
    let actualLimit = (limit) ? limit : 10
    return (value.substring(0, actualLimit) + '...')
  }

}
