import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { newmedia } from './newmedia.model';
import { userlogin } from './userlogin.model';

import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

const media_upload='http://localhost:9086/media/upload';
const mymedia='http://localhost:9086/media/mymedia';
const endpoint='http://localhost:9086/check/mymedia';
const httpOptions={
  headers: new HttpHeaders({
      'Content-Type' : 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }
  
  private extractData(res : Response){
    let contents=res;
    //check if contents are not null
    return contents || { };
}


createMedia(newmedia: newmedia):Observable<any>{

  return this.http.post(media_upload,JSON.stringify(newmedia),httpOptions).pipe(map(this.extractData))

}

myMedia(username):Observable<any>{
  return this.http.get(endpoint + "/" + username).pipe(map(this.extractData));
}


}
