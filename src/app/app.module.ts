import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { RegisterComponent } from './components/register/register.component';
import { AddImageComponent } from './components/add-image/add-image.component';
import { AddNoteLabelsComponent } from './components/add-note-labels/add-note-labels.component';
import { ArchiveNoteComponent } from './components/archive-note/archive-note.component';
import { ChangeColorComponent } from './components/change-color/change-color.component';
import { EditLabelsComponent } from './components/edit-labels/edit-labels.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LabelsComponent } from './components/labels/labels.component';
import { MainNotesComponent } from './components/main-notes/main-notes.component';
import { NoteSearchBodyComponent } from './components/note-search-body/note-search-body.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { PinNoteComponent } from './components/pin-note/pin-note.component';
import { RemainderComponent } from './components/remainder/remainder.component';
import { SearchNoteComponent } from './components/search-note/search-note.component';
import { HashComponent } from './components/hash/hash.component';
import { HashdailogComponent } from './components/hashdailog/hashdailog.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { DynamicHoverClassDirective } from './Directive/dynamic-hover-class.directive';
import { NoteFilterPipe } from './note-filter.pipe';
import { SearchPipe } from './search.pipe';
import { SearchNotesPipe } from './search-notes.pipe';
import { UserPipe } from './user.pipe';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime' ;
import { LoginComponent } from './components/login/login.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    SidenavbarComponent,
    AddImageComponent,
    AddNoteLabelsComponent,
    ArchiveNoteComponent,
    ChangeColorComponent,
    CollaboratorsComponent,
    EditLabelsComponent,
    ForgotPasswordComponent,
    LabelsComponent,
    MainNotesComponent,
    NoteSearchBodyComponent,
    PasswordResetComponent,
    PinNoteComponent,
    RemainderComponent,
    SearchNoteComponent,
    HashComponent,
    HashdailogComponent,
    UpdateNoteComponent,
    DynamicHoverClassDirective,
    NoteFilterPipe,
    SearchPipe,
    SearchNotesPipe,
    UserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
