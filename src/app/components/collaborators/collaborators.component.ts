import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Note } from 'src/app/model/note';
import { DomSanitizer } from '@angular/platform-browser';
import { NoteService } from 'src/app/service/note.service';
import { constructor } from 'q';
import { User } from 'src/app/model/user';



interface ImageData {
  imageSrc: any;
}

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent implements OnInit {

    constructor(private userService: UserService, public dialogRef: MatDialogRef<CollaboratorsComponent>,
                @Inject(MAT_DIALOG_DATA) public note: Note,
                private snackBar: MatSnackBar, private sanitizer: DomSanitizer,
                private noteService: NoteService) { }


    public user: any;
    public email = '';
    public imageData = {} as ImageData;
    public myControl = new FormControl();
    public users: User[] = [];
    public collabUsers: User[] = [];
error: any;
    ngOnInit() {
      // // this.getImage();
      // this.getUsers();
      // this.getCollaborateUser();
      // this.getNoteOwner();
    }
//   getCollaborateUser() {

//     throw new Error('Method not implemented.');
//   }

//     public getNoteOwner() {
//       this.userService.getCollaborateUser(this.note.userId).subscribe(
//         user => this.user = user);
//     }
//     public getUsers() {
//       this.userService.getUsers().subscribe(({ body }) => {
//         this.users = body;
//         console.log(this.users);
//       }
//         , error => console.log('error'));
//     }

//     collaborate(emailId: any) {
//       this.userService.verifyEmail(emailId).subscribe(user => {
//         if (user.id === this.note.userId) {
//           this.snackBar.open('you cannot add the owner', 'error', { duration: 2000 });
//           return;
//         }
//         this.snackBar.open('emailId verified', 'ok', { duration: 2000 });
//         this.noteService.createCollaborator(this.note.noteId, user.id).subscribe((resp: any) => {
//           this.dialogRef.close();
//           this.snackBar.open('added to collaborator', 'ok', { duration: 2000 }; );
//         }
//        ; )

//       }, => { this.snackBar.open('email not present or collaborator already present', 'error', { duration: 2000; }); })

//     }

// closeClick(); {
//       this.dialogRef.close();
//     }

//     // getImage() {
//     //   this.userService.downloadImage().subscribe(resp => {
//     //     this.user = resp
//     //     if (this.user.profilePicture != null) {
//     //       const url = `data:${this.user.contentType};base64,${this.user.profilePicture}`;
//     //       this.imageData = {
//     //         imageSrc: this.sanitizer.bypassSecurityTrustUrl(url)
//     //       }
//     //     }
//     //     else {
//     //       this.imageData.imageSrc = null;
//     //     }
//     //   }, error => {
//     //     this.snackBar.open("error to download image", "error", { duration: 2000 });
//     //   }
//     //   )
//     // }

// getCollaborateUser(); {
// // tslint:disable-next-line: prefer-for-of
//       for (let i = 0; i < this.note.collaborators.length; i++) {
//         let k = 0;
//         this.userService.getCollaborateUser(this.note.collaborators[i].userId).subscribe(
//           (          user: any) => {
//             this.collabUsers[k] = user;
//             k++;
//           }
//           , (error: any) => console.log(err; or; ))
//       }
//     }

// removeCollaborator(collabUser); {
//       this.noteService.removeCollaborateUser(this.note.noteId, collabUser.id).subscribe((resp: any) => {
//         console.log(; resp; );
//       this.snackBar.open('collaborator removed', 'ok', { duration: 2000 });
//       this.dialogRef.close();

//       }, (error: any) =>
//           this.snackBar.open('collaborator connot be removed', 'error', { duration: 2000 })
//  ;     )
//     }

  }
