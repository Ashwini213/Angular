import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/service/note.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { UtilService } from 'src/app/service/util.service';


@Component({
  selector: 'app-main-notes',
  templateUrl: './main-notes.component.html',
  styleUrls: ['./main-notes.component.scss']
})
export class MainNotesComponent implements OnInit {

  public grid = false;

  public notes: Note[] = [];
  constructor(private noteService: NoteService, private snackBar: MatSnackBar,
              public dialog: MatDialog, private helperService: UtilService) { }

  ngOnInit() {
    this.getNotes();
    this.helperService.getTheme().subscribe((resp) =>
      this.grid = resp
    );
  }

  public refresh() {
    this.getNotes();
  }

  public onUpdateNote(data) {
    this.updateMethod(data.note);
  }

  updateMethod(note) {
    this.noteService.updateNote(note, note.noteId).subscribe(response => {
      this.getNotes();
    },
      error => {
        console.log('error');
      });
  }

  public getNotes() {
    this.noteService.retrieveNotes().subscribe(newNote => {
      this.notes = newNote;
    }, error => {
      this.snackBar.open('error', 'error to retrieve notes', { duration: 2000 });
    }
    );
  }

}
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { HttpHandlerService } from 'src/app/service/util.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-note',
//   templateUrl: './note.component.html',
//   styleUrls: ['./note.component.scss']
// })
// export class NoteComponent implements OnInit {
//     noteForm: FormGroup;
//     submitted = false;
//     returnUrl: string;
//     hide = true;
//     constructor(private formBuilder: FormBuilder,
//                 private handler: HttpHandlerService,
//                 private router: Router
//                 ) {

//     }

//     ngOnInit() {
//       this.noteForm = this.formBuilder.group({
//         description: ['', Validators.required],
//         title: ['', Validators.required]
//       });
//     }

//     get f() { return this.noteForm.controls; }

//     public onSubmit(user) {
//       this.submitted = true;
//       if (this.noteForm.invalid) {
//         return;
//       }
//       this.handler.note(user).subscribe(res => {
//         console.log('res::', res);
//         localStorage.setItem('token', res.headers.get('token'));
//         this.router.navigate(['/dashboard']);
//       },  (error) => console.error(error));
//     }
// }
