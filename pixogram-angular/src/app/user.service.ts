import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { newuser } from './newuser.model';
import { userlogin } from './userlogin.model';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
const user_login='http://localhost:9087/user/login';
const user_register='http://localhost:9087/user/register';
const endpoint='http://localhost:9087/user/followpage';
const httpOptions={
  headers: new HttpHeaders({
      'Content-Type' : 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private extractData(res : Response){
    let contents=res;
    //check if contents are not null
    return contents || { };
}

createUser(newuser: newuser):Observable<any>{

  return this.http.post(user_register,JSON.stringify(newuser),httpOptions).pipe(map(this.extractData))

}


login(userlogin: userlogin):Observable<any>{
  console.log(userlogin.password);
  console.log(userlogin.username);
  return this.http.post(user_login,JSON.stringify(userlogin),httpOptions).pipe(map(this.extractData))

}
getfollow(username):Observable<any>{
  return this.http.get(endpoint + "/" + username).pipe(map(this.extractData));
}

}