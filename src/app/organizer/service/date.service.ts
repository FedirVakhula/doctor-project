import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());

  constructor() {}

  changeMonth(value: number) {
    const result = this.date.value.add(value, 'month');
    this.date.next(result);
  }

  changeDate(date: moment.Moment) {
    const result = this.date.value.set({
      date: date.date(),
      month: date.month()
    });
    this.date.next(result);
  }
}
