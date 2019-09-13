import { Component, OnInit } from '@angular/core';
import { user } from '../user.model';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { FollowService } from '../follow.service';




@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.scss']
})
export class FollowerComponent implements OnInit {

  constructor(private rest:UserService,private httpClient: HttpClient,private rest2:FollowService) { }
  userinfo2: user=new user();
  userinfo1: any=[];
  ngOnInit() {
    this.getfollow();
  }

  getfollow(){
    this.userinfo2 = JSON.parse(localStorage.getItem('userinfo'));
    this.userinfo1=[];
    this.rest.getfollow(this.userinfo2.username).subscribe((data)=>this.userinfo1=data);
  }

  followuser(id: string)
  {

    const uploadData = new FormData();
   
    this.userinfo1 = JSON.parse(localStorage.getItem('userinfo'));
  uploadData.append('followername',id);
  uploadData.append('username', this.userinfo1.username);
    this.httpClient.post('http://localhost:9085/follow/followuser', uploadData)
    .subscribe();
  
  }

  
}
