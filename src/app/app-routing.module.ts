import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { RegisterComponent } from './components/register/register.component';
import { RemainderComponent } from './components/remainder/remainder.component';
import { SearchNoteComponent } from './components/search-note/search-note.component';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { PinNoteComponent } from './components/pin-note/pin-note.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { NoteSearchBodyComponent } from './components/note-search-body/note-search-body.component';
import { MainNotesComponent } from './components/main-notes/main-notes.component';
import { LabelsComponent } from './components/labels/labels.component';
import { ImageComponent } from './components/image/image.component';
import { HashComponent } from './components/hash/hash.component';
import { HashdailogComponent } from './components/hashdailog/hashdailog.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { EditLabelsComponent } from './components/edit-labels/edit-labels.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { ChangeColorComponent } from './components/change-color/change-color.component';
import { ArchiveNoteComponent } from './components/archive-note/archive-note.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'sidenavbar', component: SidenavbarComponent
  },
  {
    path: 'remainder', component: RemainderComponent
  },
  {
    path: 'search-note', component: SearchNoteComponent
  },
  {
    path: 'update-note', component: UpdateNoteComponent
  },
  {
    path: 'pin-note', component: PinNoteComponent
  },
  {
    path: 'password-reset', component: PasswordResetComponent
  },
  {
    path: 'note-search-body', component: NoteSearchBodyComponent
  },
  {
    path: 'main-notes', component: MainNotesComponent
  },
  {
    path: 'labels', component: LabelsComponent
  },
  {
    path: 'image', component: ImageComponent
  },
  {
    path: 'hash', component: HashComponent
  },
  {
    path: 'hashdailog', component: HashdailogComponent
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent
  },
  {
    path: 'edit-labels', component: EditLabelsComponent
  },
  {
    path: 'collaborators', component: CollaboratorsComponent
  },
  {
    path: 'changhe-color', component: ChangeColorComponent
  },
  {
    path: 'arvhive-note', component: ArchiveNoteComponent
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
