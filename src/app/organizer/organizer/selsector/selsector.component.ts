import { Component, OnInit } from '@angular/core';
import { DateService } from '../../service/date.service';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-selsector',
  templateUrl: './selsector.component.html',
  styleUrls: ['./selsector.component.css']
})
export class SelsectorComponent implements OnInit {

  public date: BehaviorSubject<moment.Moment>;

  constructor(private dateService: DateService) { }


  ngOnInit() {
    this.date = this.dateService.date;
  }

  go (value: number) {
    this.dateService.changeMonth(value);
  }

}
