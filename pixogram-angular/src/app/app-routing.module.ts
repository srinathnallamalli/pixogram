import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UploadMediaComponent } from './upload-media/upload-media.component';
import { SingleMediaUploadComponent } from './single-media-upload/single-media-upload.component';
import { MultipleMediaUploadComponent } from './multiple-media-upload/multiple-media-upload.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountComponent } from './account/account.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { BlockedAccountsComponent } from './blocked-accounts/blocked-accounts.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { SearchComponent } from './search/search.component';
import { LogoutComponent } from './logout/logout.component';
import { FollowerComponent } from './follower/follower.component';
import { MymediaComponent } from './mymedia/mymedia.component';
import { FollowersComponent } from './followers/followers.component';



const routes: Routes = [
  {path:'',component:SidebarComponent,pathMatch:'full',
  children:[
    {path:'',component:LoginComponent},
  ]
},

{path:'followers',component:FollowersComponent,
 
},


  {
    path:'s1',component:UploadMediaComponent,
    children:[
      {path:'',component:SingleMediaUploadComponent},
      {path:'singlemedia',component:SingleMediaUploadComponent},
      {path:'multiplemedia',component:MultipleMediaUploadComponent}
    ]},
  {path:'s',component:SidebarComponent,
    children:[
      {path:'',component:LoginComponent},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent}
    ]},
    { path: 's3', component: FollowerComponent},
    { path: 's2', component: MymediaComponent},
    {path:'s4',component:AccountComponent,
    children:[
      {path:'',component:NewsfeedComponent},
      {path:'newsfeed',component:NewsfeedComponent},

      {path:'logout',component:LogoutComponent}
    ]}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
