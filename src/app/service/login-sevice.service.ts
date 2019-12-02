import { Injectable } from '@angular/core';
import { Observable, Subject, throwError, forkJoin, Observer } from 'rxjs';
import { IUser, IDoctor } from '../models/models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, switchMap, filter, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class LoginSevice {


  private usersUrl = 'http://localhost:3000/users';
  private usersUrlDoc = 'http://localhost:3000/doctors';

  public errorMessageSub = new Subject();
  public log = true;
  public myId: number;

  constructor(
    private http: HttpClient,
    private router: Router,
    private location: Location
  ) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl)
      .pipe(catchError(this.handleError));
  }

  public getDoc(): Observable<any> {
    return this.http.get<any>(this.usersUrlDoc)
      .pipe(
        catchError((err) => {
          console.log(err);
          return err;
        })
      );
  }

  public logIn(email: string, password: string) {
    this.getUsers().subscribe((data: IUser[]) => {
      const user = data.find((el: IUser) => el.email === email && el.password === password);
      if (user) {
        this.myId = user.id;
        !user.isDoctor ? this.router.navigateByUrl('/user') : this.router.navigateByUrl('/doc');
        localStorage.setItem('ACCESS_TOKEN', Math.floor(Math.random() * 1000).toString());
        this.log = false;
      }
      this.errorMessageSub.next(!!user);
    });
  }

  public getUser(id: string): Observable<IUser> {
    return this.getUsers()
      .pipe(map((data: IUser[]) => data.find((el: IUser) => el.id === +id)));
  }


  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public userRegistaration(): void {
    this.router.navigateByUrl('/registration');
  }

  public logOut(): void {
    this.router.navigateByUrl('/home');
    localStorage.removeItem('ACCESS_TOKEN');
    this.log = true;
  }

  public addUser(body: IUser, doctor_id?: string): Observable<any> {
    if (body.isDoctor) {
      const bodyDoctor = {
        id: body.id,
        specialty: body.specialty,
        patients: [],
        firstName: body.firstName,
        lastName: body.lastName
      };
      delete body.specialty;
      this.log = false;
      return forkJoin(
        this.http.post(this.usersUrlDoc, bodyDoctor)
        .pipe(catchError((err) => {
          console.log(err);
          return err;
        })),
        this.http.post(this.usersUrl, body)
      );
    } else {
      const options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      };
      body.history = [{
        'name': 'bcg',
        'exist': false,
        'date': null
      },
      {
        'name': 'kir',
        'exist': false,
        'date': null
      }];
      return this.getDoc().pipe(
        mergeMap((data) => {
          const doctor = data.find((elem) => elem.id === doctor_id);
          if (doctor.patients && !doctor.patients.includes(body.id)) {
            doctor.patients.push(body.id);
            this.log = false;
            this.myId = body.id;
          }
          return forkJoin(
            this.http.post(this.usersUrl, body),
            this.http.put(`${this.usersUrlDoc}/${doctor.id}`, JSON.stringify(doctor), options)
          );
        }
        )
      );
    }
  }



}
