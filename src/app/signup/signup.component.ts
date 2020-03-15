import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'app/firebase.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }

  public signUpForm = new FormGroup({
    email: new FormControl('',  Validators.required),
    password: new FormControl('',  Validators.required),
   
  }); 
  
  signup(formData: FormData){
    this.firebaseService.signUp(formData["email"], formData["password"]);
  }

  ngOnInit() {
  }

}
