import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { HeaderComponent, FooterComponent, NewspaperComponent, UsersComponent, DepartmentComponent, LoginComponent} from '.';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DocComponent } from './doc/doc.component';
import { DocInfoComponent } from './doc/doc-info/doc-info.component';
import { DepartmentDocInfoComponent } from './department/department-doc-info/department-doc-info.component';
import { OrganizerModule } from './organizer/organizer.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewspaperComponent,
    UsersComponent,
    DepartmentComponent,
    LoginComponent,
    RegistrationFormComponent,
    DocComponent,
    DocInfoComponent,
    DepartmentDocInfoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    CoreModule,
    UsersModule,
    HttpClientModule,
    OrganizerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
