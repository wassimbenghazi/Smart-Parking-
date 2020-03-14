import { Component, OnInit,Inject, AfterViewInit } from '@angular/core';
import {LicensePlate} from '../models/LicensePlate-models';
import {User} from '../models/users-models';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database'
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatTableDataSource } from '@angular/material';
import { ActionSequence } from 'protractor';
import { DataSource } from '@angular/cdk/table';


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

  constructor(public dialog: MatDialog, public db:AngularFireDatabase) {

    this.itemList = db.list("Users")
    
    
  }
 loadData(){
  this.itemList.snapshotChanges().subscribe(
    actions =>{
      actions.forEach(action=>{
       let y=action.payload.toJSON()
       y['$key'] = action.key
       y={$key: 2, name: y['name'], lastname: y['lastname'], email: y['email'], cin:y['cin'],phone:y['phone'], type_U:y['type_U'],password:y['password']}
       this.Users.push( y as User  )
       this.dataSource = this.Users
       
      })
      
    }
  )
  return this.Users
 }


  element:LicensePlate={id_U: 1,  id_L: 1, type_Car: 'marcedes', nb_L:11111111, img_Li_Url:''};
  displayedColumns: string[] = ['id', 'name', 'lastname', 'email','cin','num','action'];
  dataSource:User[] 

  
  
   isShown : boolean = false;
   id: number;
   idMat: number;
   car: string;
   mat: number;
  ngOnInit() {console.log(this.Users)
     }
   
  ngAfterViewInit() {
      this.loadData()
      this.dataSource
 }

    close(){
     this.isShown= false;} 


     openDialog( data1): void {console.log(this.Users)
      
      const d : number=data1.$key;
      this.element=Matricules.find(x=>x.id_U==d);
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '450px',
        data: {id: this.element.id_U, idMat: this.element.id_L, car: this.element.type_Car,mat:this.element.nb_L,data1}
      });
  
      
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
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}











