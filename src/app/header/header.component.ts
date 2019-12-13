import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginSevice } from '../service/login-sevice.service';
import { Subject, Observer, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public show: boolean;
  public res: Subscription;

  constructor(private loginSevice: LoginSevice) { }

  ngOnInit() {
    this.res = this.loginSevice.chanel$.subscribe((data) => this.show = data);
  }

  logOut(): void {
    this.loginSevice.logOut();
  }

  ngOnDestroy() {
    this.res.unsubscribe();
  }
}
