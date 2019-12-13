import { Component, OnInit } from '@angular/core';
import { LoginSevice } from '../service/login-sevice.service';
import { IUser, IDoctor } from '../models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public myDoc: IDoctor;

  constructor(
    public loginSevice: LoginSevice,
    private rout: Router
    ) { }

  result: boolean;
  list: IDoctor[];

  ngOnInit() {
    this.loginSevice.getDoc().subscribe((data: IDoctor[]) => {
      this.list = data.filter((el: IDoctor) => el.specialty !== 'therapist');
      this.myDoc = data.find((elem) => elem.patients.includes(this.loginSevice.myId));
    });
  }

  public goOrganize(list): void {
    const link = ['/user', list];
    this.rout.navigate(link);
  }
  }

