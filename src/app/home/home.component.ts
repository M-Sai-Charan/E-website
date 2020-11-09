import { User } from './../model/user';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private formSubmitAttempt: boolean;
  hide = true;
  name = false;
  constructor(private authService:AuthService,public router:Router) {
   }
  ngOnDestroy(): void {

  }

  ngOnInit() {
   if(this.loginform.dirty["userName"]){
     this.name = true;
   }
  }

  userName = '';
  onKey(value: string) {
    if(this.userName= value ){
      this.name = true;
    }else{
      this.name=false;
    }
  }

  loginform = new FormGroup({
    userName:new FormControl('',
    [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    emailAddress:new FormControl('',
    [Validators.required,Validators.email]),
    passWord:new FormControl('',
    [Validators.required,Validators.minLength(5),Validators.maxLength(10)])
  });

  get f() { return this.loginform.controls; }
  isFieldInvalid(field: string) {
    return (
      (!this.loginform.get(field).valid && this.loginform.get(field).touched) ||
      (this.loginform.get(field).untouched && this.formSubmitAttempt)
    );
  }
  onLogin(){
    if (this.loginform.valid) {
      this.authService.login(this.loginform.value)
    }

    this.formSubmitAttempt = true;
  }

}

