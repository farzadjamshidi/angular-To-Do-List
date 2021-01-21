import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  toTimeZoneString(date : Date) : string{

    return this.timeToString(date , "T");
  }

  timeToString(date : Date , seperator: string) : string {

    return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + seperator + 
                    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  }

  startOfDate( date : Date){
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    return date;
  }

  endOfDate( date : Date){
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    return date;
  }
}
