import { Component, OnInit } from '@angular/core';
import { user } from '../user.model';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { FollowService } from '../follow.service';
import { MediaService } from '../media.service';


@Component({
  selector: 'app-mymedia',
  templateUrl: './mymedia.component.html',
  styleUrls: ['./mymedia.component.scss']
})
export class MymediaComponent implements OnInit {
  userinfo2: user=new user();
  medias: any=[];
  
  constructor(private rest:UserService,private httpClient: HttpClient,private rest2:FollowService,private rest3:MediaService) { }

  ngOnInit() {
    this.myMedia();
  }

  myMedia(){
    this.userinfo2 = JSON.parse(localStorage.getItem('userinfo'));
    this.medias=[];
    this.rest3.myMedia(this.userinfo2.username).subscribe((data)=>this.medias=data);

  }

}
