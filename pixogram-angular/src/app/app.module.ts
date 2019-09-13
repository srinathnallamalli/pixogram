import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UploadMediaComponent } from './upload-media/upload-media.component';
import { SingleMediaUploadComponent } from './single-media-upload/single-media-upload.component';
import { MultipleMediaUploadComponent } from './multiple-media-upload/multiple-media-upload.component';
import { AccountComponent } from './account/account.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { BlockedAccountsComponent } from './blocked-accounts/blocked-accounts.component';
import { AccountUpdateComponent } from './account-update/account-update.component';
import { SearchComponent } from './search/search.component';
import { LogoutComponent } from './logout/logout.component';
import { MymediaComponent } from './mymedia/mymedia.component';
import { FollowerComponent } from './follower/follower.component';
import { MymediaDetailsComponent } from './mymedia-details/mymedia-details.component';
import { FollowService } from './follow.service';
import { UserService } from './user.service';
import { MediaService } from './media.service';
import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { FollowersComponent } from './followers/followers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    UploadMediaComponent,
    SingleMediaUploadComponent,
    MultipleMediaUploadComponent,
    AccountComponent,
    NewsfeedComponent,
    BlockedAccountsComponent,
    AccountUpdateComponent,
    SearchComponent,
    LogoutComponent,
    MymediaComponent,
    FollowerComponent,
    MymediaDetailsComponent,
    FollowersComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  
  providers: [UserService],
  bootstrap: [TestComponent]
})
export class AppModule { }
