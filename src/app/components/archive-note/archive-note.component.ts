import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/service/note.service';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-archive-note',
  templateUrl: './archive-note.component.html',
  styleUrls: ['./archive-note.component.scss']
})
export class ArchiveNoteComponent implements OnInit {
  public notes: Note[] = [];
  public grid = false;
  public message = 'archive';

  constructor(private noteService: NoteService, private snackBar: MatSnackBar,
              public dialog: MatDialog, private utilService: UtilService) { }

  ngOnInit() {
    this.getNotes();
    this.utilService.getTheme().subscribe((resp) =>
      this.grid = resp
    );
    console.log(this.message);
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
