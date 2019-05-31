import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar, MatDialog } from '@angular/material';
import { Subject } from 'rxjs';

import { DomSanitizer } from '@angular/platform-browser';
import { useAnimation } from '@angular/animations';
// import { ImageComponent } from '../image/image.component';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/service/note.service';
import { UserService } from 'src/app/service/user.service';
import { UtilService } from 'src/app/service/util.service';

interface ImageData {
  imageSrc: any;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public grid = false;
  public hide = true;
  public user;
  public dynamicBind: Note;
  public searchString = '';
  // public imageData =  {} as ImageData;
  public toggleNav: Subject<any> = new Subject();


  constructor(private router: Router, private noteService: NoteService, private snackBar: MatSnackBar,
              private userService: UserService, private dailog: MatDialog,
              private helperService: UtilService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  //  this.getImage();
  }

  // getImage() {
  //   this.userService.downloadImage().subscribe(resp => {
  //     this.user = resp;
  //     console.log(this.user);
  //     if (this.user.profilePicture != null) {
  //       const url = `data:${this.user.contentType};base64,${this.user.profilePicture}`;
  //       this.imageData = {
  //         imageSrc: this.sanitizer.bypassSecurityTrustUrl(url)
  //       };
  //     } else {
  //       this.imageData.imageSrc = null;
  //     }
  //   }, error => {
  //     console.log('error');
  //   }
  //   );
  // }

  // openDialog(): void {
  //  // const dialogRef = this.dailog.open(ImageComponent, {
  //     width: '500px',
  //     data: ''
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //    // this.getImage();
  //     console.log('The dialog was closed');
  //   });
  // }

  public toggle() {
    this.toggleNav.next();
    console.log(this.toggleNav);
  }

  public getNotes() {
    this.noteService.retrieveNotes().subscribe(newNote => {
      this.dynamicBind = newNote;
    }, error => {
      this.snackBar.open('error', 'error to retrieve notes', { duration: 2000 });
    }
    );
  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public viewGrid() {
    this.grid = !this.grid;
    this.helperService.setTheme(this.grid);
  }

  // public test() {
  //   var numbers = ['delhi', 'kkp', 'hai', 'delhi', 'hai', 'nope'];
  //   var newNumbers = numbers.filter((number, index) => {
  //     return index == numbers.indexOf(number);
  //   });
  //   console.log(newNumbers);
  // }

  // public test2() {
  //   var numbers = ['delhi', 'kkp', 'hai', 'nope'];
  //   var value = 'delhi';
  //   console.log(numbers.some((item) => item === value));
  // }

  public searchtest() {
    this.helperService.setSearch(this.searchString);
    this.router.navigate(['dashboard/search']);
  }

  clearSearch() {
    this.searchString = '';
    this.router.navigate(['dashboard/main-notes']);
  }

}
// import { Component, OnInit } from '@angular/core';
// import { Subject } from 'rxjs';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss']
// })
// export class DashboardComponent implements OnInit {
//   shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

//     //   public toggleNav: Subject<any> = new Subject();
//     constructor() { }
//     ngOnInit() {
//     }
//     // public toggle() {
//     //   this.toggleNav.next();
//     //   console.log(this.toggleNav);
//     // }
//   }
