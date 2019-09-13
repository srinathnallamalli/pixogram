import { Component, OnInit } from '@angular/core';
import { user } from '../user.model';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { FollowService } from '../follow.service';
@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  constructor(private rest:UserService,private httpClient: HttpClient,private rest2:FollowService) { }
  userinfo2: user=new user();
  userinfo1: any=[];
  ngOnInit() {

    this.getfollowers();
  }

  getfollowers(){
    this.userinfo2 = JSON.parse(localStorage.getItem('userinfo'));
    this.userinfo1=[];
    this.rest2.getfollowers(this.userinfo2.username).subscribe((data)=>this.userinfo1=data);
  }


}
