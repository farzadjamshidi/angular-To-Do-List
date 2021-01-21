import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeZoneDate'
})
export class TimeZoneDatePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('T', ' ');
  }

}
