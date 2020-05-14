import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { User } from 'app/models/users-models';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database'
import{Router} from '@angular/router';
import { FirebaseService } from 'app/firebase.service';
declare var $: any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {
  //  vérifier la validité de l'email 

    matcher = new MyErrorStateMatcher();
  /**/
  MyUser: User =  {id: null,
                   name: null, 
                   lastname: null,
                   email: null,
                   cin:null,
                   phone:null, 
                   type_U:null, 
                   
                   role:"user"
                  };
    
  type_Car: string =""
  nb_L: string =""

  itemList: AngularFireList<any>;
     
  constructor(public db:AngularFireDatabase, private router:Router,private firebaseService: FirebaseService) {
    this.itemList = db.list("Users")
   }

  
  ngOnInit() {
   
   }
   

  addCar(){
   console.log(this.type_Car)
   console.log(this.nb_L)
   this.showNotification('top','right')
   this.firebaseService.carRequest(this.type_Car,this.nb_L)
   
  }

 //Notification function
 showNotification(from, align){
  const type = ['','info','success','warning','danger'];

  const color = Math.floor((Math.random() * 4) + 1);

  $.notify({
      icon: "notifications",
      message: "add car request has been sent :) "

  },{
      type: type['info'],
      timer: 4000,
      placement: {
          from: from,
          align: align
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
      '</div>'
  });
}





}






export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
