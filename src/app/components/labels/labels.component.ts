import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/service/note.service';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  public grid = false;
  public notes: Note[] = [];
  public newNotes: Note[] = [];
  public label;


  constructor(private noteService: NoteService, private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              public dialog: MatDialog, private utilervice: UtilService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.label = params.labelName;
      this.utilervice.getTheme().subscribe((resp) =>
        this.grid = resp
      );
      this.getNotes();
    });
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
      this.filterLabel(this.notes);
    }, error => {
      this.snackBar.open('error', 'error to retrieve notes', { duration: 2000 });
    }
    );
  }

  public filterLabel(notes) {
    this.newNotes.length = 0;
    notes.filter((note) => note.labels.filter((label) => {
      if (this.label === label.labelName && !note.inTrash) {
        this.newNotes.push(note);
      }
    }));
  }
}
