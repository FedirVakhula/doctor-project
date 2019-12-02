import { Component, OnInit } from '@angular/core';
import { LoginSevice } from '../service/login-sevice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginSevice: LoginSevice) { }

  ngOnInit() {
  }

  logOut(): void {
    this.loginSevice.logOut();
  }
}
