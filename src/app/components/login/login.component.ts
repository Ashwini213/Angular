import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHandlerService } from '../../http-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;

  constructor(private formBuilder: FormBuilder,
              private handler: HttpHandlerService,
              private router: Router) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  public onSubmit(user) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.handler.login(user).subscribe(res => {

      localStorage.setItem('token', res.headers.get('token'));
      console.log(res.headers.get('token'));
      if (localStorage.getItem('token') != null) {
        this.router.navigate(['/dashboard']);
      }
    }, (error) => console.error(error));
  }
}
