import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { loginObject } from '../Objects/login-object';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username!:string;
  password!:string;

  constructor(private fb:FormBuilder,private loginService:LoginService,private router:Router) { }
  loginForm=this.fb.group({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)

  })
  ngOnInit(): void {
  }

  login()
  {
   const loginDataObject={
    username: this.loginForm.value.username,
    password:this.loginForm.value.password
    }
   this.loginService.login(loginDataObject).subscribe((res)=>{
    if(res)
    {
      this.router.navigate(['/homepage'])
    }
   })
  }

}
