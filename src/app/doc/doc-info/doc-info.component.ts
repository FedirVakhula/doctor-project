import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LoginSevice } from 'src/app/service/login-sevice.service';
import { IUser } from 'src/app/models/models';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-doc-info',
  templateUrl: './doc-info.component.html',
  styleUrls: ['./doc-info.component.css']
})
export class DocInfoComponent implements OnInit {

  public user: IUser;
  private usersUrl = 'http://localhost:3000/users';


  constructor(
    private location: Location,
    private loginSevice: LoginSevice,
    private route: ActivatedRoute,
    private http: HttpClient
    ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    this.loginSevice.getUser(id)
      .subscribe(( data: IUser ) => {
        this.user = data;
      });


  }

  public changeStatus(newValue, index) {
    this.user.history[index].exist = newValue.currentTarget.checked;
  }

  public update() {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    this.http.put(`${this.usersUrl}/${this.user.id}`, JSON.stringify(this.user), options)
    .subscribe();
    this.goBack();
  }

  public goBack () {
    this.location.back();
  }

  }



