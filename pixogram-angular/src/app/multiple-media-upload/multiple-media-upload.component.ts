import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../user.model';
@Component({
  selector: 'app-multiple-media-upload',
  templateUrl: './multiple-media-upload.component.html',
  styleUrls: ['./multiple-media-upload.component.scss']
})
export class MultipleMediaUploadComponent implements OnInit {
  userinfo1: user=new user();
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  title = 'ImageUploaderFrontEnd';

  public selectedFile;
  public event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;
  public  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
  };

 }


 // This part is for uploading
 onUpload() {


  const uploadData = new FormData();
  uploadData.append('imagename', this.selectedFile.name);
  this.userinfo1 = JSON.parse(localStorage.getItem('userinfo'));
uploadData.append('username',this.userinfo1.username);

  this.httpClient.post('http://localhost:9086/check/upload', uploadData)
  .subscribe(
              
            );





 }
}