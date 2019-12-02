import { Component, OnInit } from '@angular/core';
import { LoginSevice } from '../service/login-sevice.service';
import { IUser, IDoctor } from '../models/models';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, buffer } from 'rxjs/operators';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  list: IDoctor[];
  myUsre: IUser;
  public doctor: IDoctor;
  public patients: IUser[] = [];


  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public loginSevice: LoginSevice
    ) { }

  ngOnInit() {
    this.loginSevice.getDoc()
      .pipe(
        switchMap((data: IDoctor[]) => {
          this.doctor = data.find((el: IDoctor) => el.id === this.loginSevice.myId);
          return this.loginSevice.getUsers();
        }),
        switchMap((data: IUser[]) => {
          let patients = [];
          if (this.doctor) {
            const doctor = this.doctor;
            patients = data.filter((user: IUser) => doctor.patients.includes(user.id));
          }
          return patients;
      })
    ).subscribe((data: IUser) => {
      this.patients.push(data);
    });
  }

  public info(list) {
    const link = ['/doc', list.id];
    this.router.navigate(link);

  }

}
