import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private loginService:LoginService) { }
  loginForm=this.fb.group({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)

  })
  ngOnInit(): void {
  }

  login()
  {
   this.loginService.login().subscribe((res)=>{
    console.log(res)
   })
  }

}
