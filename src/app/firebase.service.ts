import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from "@angular/router";
import { AngularFirestore , AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './models/users-models';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private ngZone: NgZone, private afAuth: AngularFireAuth, private firestore: AngularFirestore , private router: Router) { }

  public currentUser: any;
  public userStatus: string;
  public userStatusChanges: BehaviorSubject<string> = new BehaviorSubject<string>(this.userStatus);
  public userDoc:AngularFirestoreDocument<User>

  setUserStatus(userStatus: any): void {
    this.userStatus = userStatus;
    this.userStatusChanges.next(userStatus);
  }

  carRequest(type_Car:string,nb_L:string){
    let LicensePlate = {
      id: this.currentUser.id,
      type_Car:type_Car,
      nb_L:nb_L,
      verfied:"false"
     }
    this.firestore.collection("LicensePlates").add(LicensePlate)
       
  }

  signUp(email:string, password:string, name:string, lastname:string,cin:number,phone:number){
  
    
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
     .then((userResponse)=>{
       // add the user to the "users" database
       let user = {
        id: userResponse.user.uid,
        email: userResponse.user.email,
        role: "user",
        name:name,
        lastname:lastname,
        cin:cin,
        phone:phone
       }
       
       //add the user to the database
       this.firestore.collection("users").add(user)
       .then(user => {
        user.get().then(x => {
          //return the user data
          console.log(x.data());
          this.currentUser = x.data();
          this.setUserStatus(this.currentUser);
          if(x.data().role !== "admin") {
            this.router.navigate(["/admin/user-profile"]);
          }else{
            this.router.navigate(["/admin/user-profile"]);
          }
          
         
        })
       }).catch(err => {
         console.log(err);
       })
       
      
     })
     .catch((err)=>{
        console.log("An error ocurred: ", err);
     })
 
    }

    login(email: string, password: string) {
      
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user)=>{
        this.firestore.collection("users").ref.where("email", "==", user.user.email).onSnapshot(snap =>{
          snap.forEach(userRef => {
            console.log("userRef", userRef.data());
            this.currentUser = userRef.data();
            //setUserStatus
            this.setUserStatus(this.currentUser)
            if(userRef.data().role !== "admin") {
              this.router.navigate(["/admin/user-profile"]);
            }else{
              this.router.navigate(["/admin/user-profile"]);
            }
          })
        })
       
      }).catch(err => err)
  }

  logOut(){
    this.afAuth.auth.signOut()
    .then(()=>{
      console.log("user signed Out successfully");
      //set current user to null to be logged out
      this.currentUser = null;
      //set the listenener to be null, for the UI to react
      this.setUserStatus(null);
      this.ngZone.run(() => this.router.navigate(["/login"]));

    }).catch((err) => {
      console.log(err);
    })
  }


  userChanges(){
    this.afAuth.auth.onAuthStateChanged(currentUser => {
      if(currentUser){
        this.firestore.collection("users").ref.where("username", "==", currentUser.email).onSnapshot(snap =>{
          snap.forEach(userRef => {
            this.currentUser = userRef.data();
            //setUserStatus
            this.setUserStatus(this.currentUser);
            console.log(this.userStatus)
            
            if(userRef.data().role !== "admin") {
             this.ngZone.run(() => this.router.navigate(["/"]));
            }else{
             this.ngZone.run(() => this.router.navigate(["/admin"])); 
            }
          })
        })
      }else{
        //this is the error you where looking at the video that I wasn't able to fix
        //the function is running on refresh so its checking if the user is logged in or not
        //hence the redirect to the login
        this.ngZone.run(() => this.router.navigate(["/login"]));
      }
    })
  }
  deleteUser(user:User){
    this.userDoc= this.firestore.doc(`users/lF7UaGNMFsS0XoNb8tlK`)
    this.userDoc.delete()
    // this.firestore.collection("users").remove()
      // snap.forEach(userRef => {userRef.delete()})})
    // this.firestore.collection("users").doc(user.id).delete()
   
    // var user = this.afAuth.auth().currentUser;
  }
}
