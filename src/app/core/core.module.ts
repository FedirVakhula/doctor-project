import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent, PathNotFoundComponent } from '.';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ AboutComponent, PathNotFoundComponent, ContactComponent ]
})
export class CoreModule { }
