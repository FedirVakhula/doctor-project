import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  public departments = [{ department: 'ГІНЕКОЛОГІЯ', key: 'gynecology'},
    { department: 'ДИТЯЧА КЛІНІКА', key: 'baby-medication'},
    { department: 'ДИТЯЧА ХІРУРГІЯ', key: 'pediatric-surgeon'},
    { department: 'КАРДІОЛОГІЯ', key: 'cardiologist'},
    { department: 'МАМОЛОГІЯ', key: 'mammologist'},
    { department: 'НЕЙРОХІРУРГІЯ', key: 'neurosurgeon'},
    { department: 'ОНКОЛОГІЯ', key: 'oncologist'},
    { department: 'ТРАВМОТОЛОГІЯ', key: 'traumatologist'},
    { department: 'ХІРУРГІЯ', key: 'surgeon'},
    { department: 'СІМЕЙНИЙ ЛІКАР', key: 'therapist'},
    { department: 'ЛОР', key: 'lor' }];


  constructor(public router: Router) { }

  ngOnInit() {
  }

  public infoDocDepartment(key): void {
    const link = ['/home', key.key];
    this.router.navigate(link);
  }

}
