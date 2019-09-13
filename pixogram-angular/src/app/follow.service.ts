import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { newfollow } from './newfollow.model';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

const follow_user='http://localhost:9085/follow/fol';
const delete_follower='http://localhost:9085/follow/delete';
const endpoint='http://localhost:9085/follow/follower';

const httpOptions={
  headers: new HttpHeaders({
      'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  
  constructor(private http: HttpClient) { }
  
  private extractData(res : Response){
    let contents=res;
    //check if contents are not null
    return contents || { };
}
createMedia(newmedia: newfollow):Observable<any>{

  return this.http.post(follow_user,JSON.stringify(newmedia),httpOptions).pipe(map(this.extractData))

}
followers(username):Observable<any>{
  return this.http.get(endpoint + "/" + username).pipe(map(this.extractData));
}
getfollowers(username):Observable<any>{
  return this.http.get(endpoint + "/" + username).pipe(map(this.extractData));
}




}
