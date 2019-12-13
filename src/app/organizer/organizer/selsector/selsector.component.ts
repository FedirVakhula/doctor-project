import { Component, OnInit } from '@angular/core';
import { DateService } from '../../service/date.service';

@Component({
  selector: 'app-selsector',
  templateUrl: './selsector.component.html',
  styleUrls: ['./selsector.component.css']
})
export class SelsectorComponent implements OnInit {

  constructor(private dateService: DateService) { }

  ngOnInit() {
  }

  go (value: number) {
    this.dateService.changeMonth(value);
  }

}
