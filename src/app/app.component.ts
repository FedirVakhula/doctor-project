import { Component, OnDestroy } from '@angular/core';
import { LoginSevice } from './service/login-sevice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'doctor';
  constructor (private logsevice: LoginSevice) {}

  ngOnDestroy () {
    // this.logsevice.logOut();
  }
}
