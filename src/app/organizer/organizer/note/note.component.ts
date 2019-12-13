import { Component, OnInit } from '@angular/core';
import { DateService } from '../../service/date.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { LoginSevice } from 'src/app/service/login-sevice.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dateService: DateService,
    private location: Location,
    public loginService: LoginSevice
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    });
  }

  public submit() {
    const {title} = this.form.value;
  }

  public goBack() {
    this.location.back();
  }

}
