import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { HashComponent } from './components/hash/hash.component';
import { HashdailogComponent } from './components/hashdailog/hashdailog.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { EditLabelsComponent } from './components/edit-labels/edit-labels.component';
import { ChangeColorComponent } from './components/change-color/change-color.component';
import { ArchiveNoteComponent } from './components/archive-note/archive-note.component';
import { LoginComponent } from './components/login/login.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'main-notes',
        component: MainNotesComponent
      },
      {
        path: 'archive-notes',
        component: ArchiveNoteComponent
      },
      {
        path: 'search',
        component: SearchNoteComponent
      },
      {
        path: 'remainder',
        component: RemainderComponent
      },
      {
        path: 'label/:labelName',
        component: LabelsComponent
      },
      {
        path: '',
        component: SidenavbarComponent
      },
      {
        path: '',
        redirectTo: 'main-notes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'resetpassword/:id',
    component: PasswordResetComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
