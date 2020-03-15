import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { FirebaseService } from "app/firebase.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
    constructor(private firebaseService: FirebaseService) { }

  public loginForm = new FormGroup({
    email: new FormControl('',  Validators.required),
    password: new FormControl('',  Validators.required),
   
  }); 

  login(formData: FormData){
    this.firebaseService.login(formData["email"], formData["password"]);
  }
  ngOnInit() {
}
}
