import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { NoteService } from 'src/app/service/note.service';
import { UtilService } from 'src/app/service/util.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
// import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //   public grid = false;
  //   public notes: Note[] = [];
  //   public newNotes: Note[] = [];
  //   public label;
  //   constructor(private noteService: NoteService, private route: ActivatedRoute,
  //               private snackBar: MatSnackBar,
  //               public dialog: MatDialog, private helperService: UtilService) { }

  //   ngOnInit() {
  //     this.route.params.subscribe((params) => {
  //       this.label = params.labelName;
  //       this.helperService.getTheme().subscribe((resp) =>
  //         this.grid = resp
  //       );
  //       this.getNotes();
  //     });
  //   }

  //   public onUpdateNote(data) {
  //     this.updateMethod(data.note);
  //   }

  //   updateMethod(note) {
  //     this.noteService.updateNote(note, note.noteId).subscribe(response => {
  //       this.getNotes();
  //     },
  //       error => {
  //         console.log('error');
  //       });
  //   }

  //   public getNotes() {
  //     this.noteService.retrieveNotes().subscribe(newNote => {
  //       this.notes = newNote;
  //       this.filterLabel(this.notes);
  //     }, error => {
  //       this.snackBar.open('error', 'error to retrieve notes', { duration: 2000 });
  //     }
  //     );
  //   }

  //   public filterLabel(notes) {
  //     this.newNotes.length = 0;
  //     notes.filter((note) => note.labels.filter((label) => {
  //       if (this.label === label.labelName && !note.inTrash) {
  //         this.newNotes.push(note);
  //       }
  //     }));
  //   }
  // }
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  hide = true;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private router: Router, private userService: UserService,
              private httpUtil: UtilService, private snackBar: MatSnackBar) {

  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit(user) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.userService.login(user).subscribe(response => {
      localStorage.setItem('token', response.headers.get('token'));
      this.router.navigate(['main-notes']);
      this.snackBar.open('Successfully logged In', 'Ok', { duration: 2000 });
    }, error => {
      this.snackBar.open('error', 'please enter valid data', { duration: 2000 });
    });
  }
}
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { UtilService } from 'src/app/service/util.service';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })

// export class LoginComponent implements OnInit {

//   loginForm: FormGroup;
//   submitted = false;
//   returnUrl: string;
//   hide = true;

//   constructor(private formBuilder: FormBuilder,
//               private handler: UtilService,
//               private router: Router
//               ) {

//   }

//   ngOnInit() {
//     this.loginForm = this.formBuilder.group({
//       email: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   get f() { return this.loginForm.controls; }

//   public onSubmit(user) {
//     this.submitted = true;
//     if (this.loginForm.invalid) {
//       return;
//     }
//     this.handler.login(user).subscribe(res => {
//       console.log('res::', res);
//       localStorage.setItem('token', res.headers.get('token'));
//       if (localStorage.getItem('token') != null) {
//       this.router.navigate(['/dashboard']);
//       }
//     },  (error) => console.error(error));

//   }
// }




