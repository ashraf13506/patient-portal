import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:LoginService,private router:Router) {

  }
registrationForm=this.fb.group({
  username:new FormControl('',Validators.required),
  email:new FormControl('',Validators.required),
  setpassword:new FormControl('',Validators.required),
  confirmpassword:new FormControl('',Validators.required),

})
  ngOnInit(): void {
  }
  registerUser()
  {
    const registrationObject={
      username:this.registrationForm.value.username,
      email:this.registrationForm.value.email,
      password:this.registrationForm.value.confirmpassword
    }

    this.http.registerNewUser(registrationObject).subscribe((res)=>{
        if(res)
        {
          this.router.navigate(['login'])
        }
    })

  }

}
