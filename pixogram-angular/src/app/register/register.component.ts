import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { UserService } from '../user.service';
import { user } from '../user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  rForm:FormGroup;
  username:string="";
  password:string="";
  repeatpassword:string="";
  email:string="";
  constructor(private router: Router,private fb:FormBuilder,private userService: UserService) { }

  ngOnInit() {
    this.onFormSubmit();
  }
  user: user=new user();
  onFormSubmit()
  {
    this.rForm=this.fb.group({
      'username':[this.username, Validators.required],
      'password':[this.password, Validators.compose([Validators.required,Validators.minLength(3), Validators.maxLength(10)])],
      'repeatpassword':[this.repeatpassword, Validators.required],
      'email':[this.email,Validators.compose([Validators.required,Validators.email])]
    })

    

  }

  createUser(): void {
    console.log('hw');
    console.log('scope ');
   this.userService.createUser(this.user)
        .subscribe( (data) => {
          alert("User created successfully.");
        
          this.router.navigate(['']);
        });
      };
}


