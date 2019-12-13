import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizerComponent } from './organizer/organizer.component';
import { CalendarComponent } from './organizer/calendar/calendar.component';
import { SelsectorComponent } from './organizer/selsector/selsector.component';
import { NoteComponent } from './organizer/note/note.component';
import { MomentPipe } from './pipe/moment.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CalendarComponent, SelsectorComponent, NoteComponent, OrganizerComponent, MomentPipe]
})
export class OrganizerModule { }
