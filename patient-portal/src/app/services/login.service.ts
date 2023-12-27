import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  login(loginDataObject:any)
  {
    const url=environment.endPointURL+'login';
    return this.http.post(url,loginDataObject)
  }

  registerNewUser(registrationDataObject:any)
  {
    const url=environment.endPointURL+'patient';
    return this.http.post(url,registrationDataObject)
  }
}
