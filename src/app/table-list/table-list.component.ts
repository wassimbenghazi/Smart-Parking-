import { Component, OnInit,Inject, AfterViewInit } from '@angular/core';
import {LicensePlate} from '../models/LicensePlate-models';
import {User} from '../models/users-models';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database'
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatTableDataSource } from '@angular/material';
import { ActionSequence } from 'protractor';
import { DataSource } from '@angular/cdk/table';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from 'app/firebase.service';
declare var $: any;

var Matricules: LicensePlate[] = [
  {id_U: 1,  id_L: 1, type_Car: 'marcedes', nb_L:11111111, img_Li_Url:''},
  
]
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})


export class TableListComponent implements OnInit ,AfterViewInit {

  itemList: AngularFireList<any>;
  Users=[]

  constructor(public dialog: MatDialog, public db:AngularFireDatabase,private firestore: AngularFirestore,private firebaseService: FirebaseService) {

    this.itemList = db.list("Users")
    
    
  }
  loadData(){
    this.firestore.collection("users").ref.where("role", "==", "user").onSnapshot(snap=>{ console.log(snap)
      snap.forEach(userRef => {
          console.log("userRef", userRef.data());
          this.Users.push( userRef.data() as User  )
          console.log(this.Users);
          this.dataSource = this.Users
          })
        })
   
   
   
    //     this.itemList.snapshotChanges().subscribe(
    //   actions =>{
    //     actions.forEach(action=>{
    //      let y=action.payload.toJSON()
    //      y['$key'] = action.key
    //      y={$key: 2, name: y['name'], lastname: y['lastname'], email: y['email'], cin:y['cin'],phone:y['phone'], type_U:y['type_U'],password:y['password']}
    //      this.Users.push( y as User  )
    //      this.dataSource = this.Users
         
    //     })
        
    //   }
    // )
   
    return this.dataSource
   }


  element:LicensePlate={id_U: 1,  id_L: 1, type_Car: 'marcedes', nb_L:11111111, img_Li_Url:''};
  displayedColumns: string[] = ['name', 'lastname', 'email','cin','phone','action'];
  dataSource:User[] 

  
  
  
  ngOnInit() {console.log(this.Users)
     }
   
  ngAfterViewInit() {
      
      this.dataSource=this.loadData()
 }
 deleteUser(userToDelete){
   this.firebaseService.deleteUser(userToDelete);
   
 }

  close(){
    
  } 
  licensePlates=[]

   openDialog( user) { 
     this.licensePlates=[]
    
    this.firestore.collection("LicensePlates").ref.where("id", "==", user.id).get().then( querySnapshot => {
      querySnapshot.forEach(userRef => {
        console.log("LicensePlates", userRef.data());
        this.licensePlates.push( userRef.data() as any  )

        })
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
          width: '1200px',
          data: {user:user, LicensePlates:this.licensePlates}
        });
  });
  
    
    // (snap=>{ console.log(snap)
    //   snap.forEach(userRef => {
    //       console.log("LicensePlates", userRef.data());
    //       this.licensePlates.push( userRef.data() as any  )

    //       })
    //       const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //         width: '1200px',
    //         data: {user:user, LicensePlates:this.licensePlates}
    //       });
    //     })
        
  }
}









export interface DialogData {
  id: number;
  idMat: number;
  car: string;
  mat: number;
}

 
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./dialog-details.css']
  
})
export class DialogOverviewExampleDialog  {

  constructor(private firebaseService: FirebaseService,public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,@Inject(MAT_DIALOG_DATA) public data: any
    ) {}
    displayedColumns: string[] = ['Type Car', 'license Plate number', 'verification status','action'];
    amount:number=0.0
    
    verification(nb_L:any){ 
      
      this.firebaseService.updateLicensePlate(nb_L);
      this.showNotification('top','right',"License Plate has been verified :) ")
  
    }

    addBalnace(){
      this.firebaseService.updateBalance(this.data.user,this.amount);
      this.showNotification('top','right',"The amount has been added to client balance :) ")
    }
  
  onNoClick(): void {
    this.dialogRef.close();
    this.dialog.closeAll()
  }

  showNotification(from, align,message){
    const type = ['','info','success','warning','danger'];
  
    const color = Math.floor((Math.random() * 4) + 1);
  
    $.notify({
        icon: "notifications",
        message: message
  
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











