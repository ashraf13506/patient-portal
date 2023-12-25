import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(private fb:FormBuilder) {

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
    console.log(this.registrationForm.value)


  }

}
