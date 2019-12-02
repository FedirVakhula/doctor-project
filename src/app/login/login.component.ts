import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginSevice } from '../service/login-sevice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private formBuilder: FormBuilder,
    public loginSevice: LoginSevice
    ) { }

  loginForm: FormGroup;
  isSubmitted = false;
  public errorMessage = true;
  private errorMessageSubscription;


  ngOnInit() {
    this.errorMessageSubscription = this.loginSevice.errorMessageSub.subscribe((data: boolean) => {
      this.errorMessage = data;
    });
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public userLogin(): void {
    this.loginSevice.logIn(this.loginForm.value.email, this.loginForm.value.password);
  }

  public userRegistaration(): void {
    this.loginSevice.userRegistaration();
  }

  ngOnDestroy() {
    this.errorMessageSubscription.unsubscribe();
  }

}
