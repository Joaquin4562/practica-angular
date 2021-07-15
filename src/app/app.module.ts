import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormStudentsComponent } from './screens/form-students/form-students.component';
import { StudentsComponent } from './screens/students/students.component';
import { StudentsByIdComponent } from './screens/students-by-id/students-by-id.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormStudentsComponent,
    StudentsComponent,
    StudentsByIdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
