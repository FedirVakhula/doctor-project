import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginSevice } from 'src/app/service/login-sevice.service';

@Component({
  selector: 'app-department-doc-info',
  templateUrl: './department-doc-info.component.html',
  styleUrls: ['./department-doc-info.component.css']
})
export class DepartmentDocInfoComponent implements OnInit {

  public docList;

  constructor(private router: ActivatedRoute,
    private rout: Router,
    private loginSevice: LoginSevice) { }

  ngOnInit() {
    const specialty = this.router.snapshot.paramMap.get('id');

      this.loginSevice.getListUser(specialty)
        .subscribe(data => this.docList = data);
  }

  public logOut (): void {
    this.loginSevice.logOut();
  }

  public goOrganize (list): void {
    const link = ['/organize', list];
    this.rout.navigate(link);
  }
}
