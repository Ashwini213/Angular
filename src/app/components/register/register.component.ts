import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHandlerService } from 'src/app/http-handler.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  constructor(private formBuilder: FormBuilder,
              private handler: HttpHandlerService,
              private router: Router
  ) {
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phonenumber: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }
  public onSubmit(user) {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.handler.register(user).subscribe(res => {
      console.log('res::', res);
      // localStorage.setItem('token', res.headers.get('token'));
      this.router.navigate(['/login']);
    }, (error) => console.error(error));
  }
}
