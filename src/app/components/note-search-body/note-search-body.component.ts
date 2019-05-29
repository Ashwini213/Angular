import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { NoteService } from 'src/app/service/note.service';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-note-search-body',
  templateUrl: './note-search-body.component.html',
  styleUrls: ['./note-search-body.component.scss']
})
export class NoteSearchBodyComponent implements OnInit {

  @Output() eventCreate = new EventEmitter();

  public showHeader = true;
  createNoteForm: FormGroup;
  loading = false;
  submitted = false;
  selectedMoment = new Date();
  public min = new Date();
  public mytoken = localStorage.getItem('token');


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private router: Router, private noteService: NoteService,
              private httpUtil: UtilService, private snackBar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit() {

    this.createNoteForm = this.formBuilder.group({
      title: [''],
      description: [''],
      remainder: ''
    });
  }
  get f() { return this.createNoteForm.controls; }

  onSubmit(note) {
    this.submitted = true;
    if (this.createNoteForm.invalid) {
      return;
    }
    if (this.createNoteForm.value.title === '' && this.createNoteForm.value.description === '') {
      return;
    }
    console.log(this.mytoken);
    console.log(note);
    this.noteService.createNote(note).subscribe(response => {
      this.eventCreate.emit(true);
      this.snackBar.open('success', 'note created', {
        duration: 2000
      });
    });
  }

  archiveNoteSave(note) {
    const newNote = {
      ...note,
      archive: true
    };
    console.log(newNote.archive);
    this.onSubmit(newNote);

  }

  pinnedNoteSave(note) {
    const newNote = {
      ...note,
      pinned: true,
    };
    this.onSubmit(newNote);
  }

  updateColor(data) {
    this.onSubmit(data.note);
  }

  public saveRemainder(selectedMoment, note) {
    const newNote = {
      ...note,
      remainder: selectedMoment,
    };
    this.onSubmit(newNote);
  }

  // public dailogCollaborator(note) {
  //   if (note.title === "" && note.description === "") {
  //     return;
  //   }
  //   const dialogRef = this.dialog.open(CollaboratorComponent, {
  //     width: '500px',
  //     data: note
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
   //   });
  // }

}
