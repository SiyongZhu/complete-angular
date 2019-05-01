import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  // transform is the inherited method that takes in value as input
  transform(value: any, limit?: number): any {
    if (!value)
      return null;
    let actualLimit = (limit) ? limit : 10
    return (value.substring(0, actualLimit) + '...')
  }

}
