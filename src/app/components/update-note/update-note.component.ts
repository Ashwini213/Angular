import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatDialog } from '@angular/material';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/service/note.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CollaboratorsComponent } from '../collaborators/collaborators.component';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  selectedMoment = new Date();
  min = new Date();
  selectedFiles: File;
  showDelete = false;

  constructor(public dialogRef: MatDialogRef<UpdateNoteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Note, private noteService: NoteService,
              private snackBar: MatSnackBar, private dialog: MatDialog,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  closeClick(newNote) {
    console.log(newNote.title);
    console.log(newNote.description);
    this.updateNote(newNote);
  }

  moveToTrash(note) {
    note.inTrash = 1;
    console.log(note);
    this.updateNote(note);
  }

  updateArchiveNote(key, data) {
    data.archive = key === 'archive' ? 1 : 0;
    data.pinned = 0;
    this.updateNote(data);
  }

  pinned(key, note) {
    note.pinned = key === 'pinned' ? 1 : 0;
    this.updateNote(note);
  }

  updateNote(newNote) {
    this.noteService.updateNote(newNote, newNote.noteId).subscribe(response => {
      console.log(response);
      this.dialogRef.close();
    },
      error => {
        console.log('error');
      });
  }

  removeLabel(label, note) {
    this.noteService.removeLabelFromNote(note.noteId, label.labelId).subscribe(response => {
      console.log('deleting check in database');
      this.dialogRef.close();
    }, (error) => console.log(error));
  }

  addNoteLabel(data) {
    this.updateNote(data.note);
  }

  updateColor(data) {
    this.updateNote(data.note);
  }

  saveRemainder(selectedMoment, note) {
    note.remainder = selectedMoment;
    this.updateNote(note);
  }

  public dailogCollaborator(note) {
    const dialogRef = this.dialog.open(CollaboratorsComponent, {
      width: '500px',
      data: note
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public onFileChanged(event, note) {
    this.selectedFiles = event.target.files[0];
    this.uploadImage(note);
  }

  public uploadImage(note) {
    this.noteService.addImage(this.selectedFiles, note.noteId).subscribe((resp) => {
      console.log('image added');
      this.updateNote(note);
    }
    );
  }

  public getImages(image, note): any {
    const url = `data:${note.contentType};base64,${image.images}`;
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  public deleteImage(image, note) {
    console.log(image.imagesId);
    this.noteService.removeImage(image.imagesId).subscribe((resp) => {
      console.log('successfull');
      this.updateNote(note);
    });

}
}
