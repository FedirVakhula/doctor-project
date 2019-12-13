import { Component, OnInit } from '@angular/core';
import { LoginSevice } from '../service/login-sevice.service';
import { Subject, Observer, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public show;

  constructor(private loginSevice: LoginSevice) { }

  ngOnInit() {
    // this.show = !this.loginSevice.log;
    // this.chanel$.next(this.show);
    const res = this.loginSevice.chanel$.subscribe((data) => this.show = data);
    console.log(res);
  }

  logOut(): void {
    this.loginSevice.logOut();
  }
}
