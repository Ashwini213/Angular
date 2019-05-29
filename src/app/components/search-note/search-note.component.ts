import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/service/note.service';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-search-note',
  templateUrl: './search-note.component.html',
  styleUrls: ['./search-note.component.scss']
})
export class SearchNoteComponent implements OnInit {

  public notes: Note[] = [];
  public grid = false;
  public searchString = '';

  constructor(private noteService: NoteService, private snackBar: MatSnackBar,
              public dialog: MatDialog, private helperService: UtilService) { }

  ngOnInit() {
    this.getNotes();
    this.helperService.getTheme().subscribe((resp) =>
      this.grid = resp
    );
    this.helperService.getSearch().subscribe((resp) =>
      this.searchString = resp);
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
