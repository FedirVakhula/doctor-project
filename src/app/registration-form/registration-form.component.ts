import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginSevice } from '../service/login-sevice.service';
import { IUser } from '../models/models';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit, OnDestroy {

  public registrationForm: FormGroup;
  public dropDounDoctorList: any[];
  public chosenDoctorId: string;
  private chanel: Subscription;
  private chanel2$: Subscription;
  private addUserSubscription$: Subscription;
  public submitted = false;

  constructor(
    private loginSevice: LoginSevice,
    private formBuilder: FormBuilder,
    private router: Router
    ) {
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cityName: ['', Validators.required],
      streetName: ['', Validators.required],
      numberHouse: ['', Validators.required],
      choiceDoctor: [''],
      isDoctor: [false],
      specialty: ['therapist'],
      education: ['']
    });


    this.chanel = this.loginSevice.getDoc().subscribe((data: IUser[]) => {
      this.dropDounDoctorList = data.filter(element => element.specialty === 'therapist');
    });
    this.chanel2$ = this.registrationForm.get('choiceDoctor').valueChanges.subscribe((val) => {
      this.chosenDoctorId = val;
    });
  }

  ngOnDestroy() {
    this.chanel.unsubscribe();
    this.chanel2$.unsubscribe();
    if (this.addUserSubscription$) {
      this.addUserSubscription$.unsubscribe();
    }
  }

  public goBack() {
    this.router.navigateByUrl('/home');
  }

  public onRegistwrUser () {
    if (this.registrationForm.invalid) {
      return;
    }
    let doctorId: string;
    if (!this.registrationForm.value.isDoctor) {
      const doctorPerson = this.dropDounDoctorList.find((doctor) => doctor.id === +this.chosenDoctorId);
      if (doctorPerson) {
        doctorId =  doctorPerson.id;
      }
    }

    this.addUserSubscription$ = this.loginSevice
      .addUser({ ...this.registrationForm.value, id: Math.floor((Math.random() * 1000)) }, doctorId)
        .subscribe((data) => {
        localStorage.setItem('ACCESS_TOKEN', Math.floor(Math.random() * 1000).toString());
          if (!this.registrationForm.value.isDoctor) {
            this.router.navigateByUrl('/user');
          } else {
            this.router.navigateByUrl('/doc');
          }
        },
        (errr) => {
          console.log('errr', errr);
        });
  }

}
