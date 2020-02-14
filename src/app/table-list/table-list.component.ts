import { Component, OnInit,Inject } from '@angular/core';
import{Matricule} from '../models/matricule-models';
import{User} from '../models/users-models';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
var Users: User[] = [
  {id: 1, name: 'Hamdi', lastname: 'neji', email: 'Hamdi@gmail.com', cin:11111111,num:55555555555},
  {id: 2, name: 'wassim', lastname: 'benghazi', email: 'He@hahah.com',cin:11111111,num:55555555555},
  {id: 3, name: 'raouf', lastname: 'kioua', email: 'raouf@lj.com',cin:11111111,num:55555555555},
  {id: 4, name: 'riadh',lastname: 'rached', email: 'Be@ja.cee',cin:11111111,num:55555555555},
  {id: 5, name: 'safwen',lastname: 'ben mlaaeb', email: 'Be@ja.cee',cin:11111111,num:55555555555}
  
]

var Matricules: Matricule[] = [
  {id: 1,  idMat: 1, car: 'marcedes', mat:11111111},
  {id: 2,  idMat: 2, car: 'bmw',mat:55555555555},
  {id: 3,  idMat: 3, car: 'golf',mat:55555555555},
  {id: 4, idMat: 4, car: 'clio',mat:55555555555},
  {id: 5, idMat: 5, car: 'ovetto 7amra',mat:55555555555},
]
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})


export class TableListComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  element:Matricule={id: 1,  idMat: 1, car: 'marcedes', mat:11111111};
  displayedColumns: string[] = ['id', 'name', 'lastname', 'email','cin','num','action'];
  dataSource = Users;
  user:User={id: 1, name: 'Hydrogen', lastname: '1.0079', email: 'Hamdi@haiohaa.ce', cin:11111111,num:55555555555};
   isShown : boolean = false;
   id: number;
   idMat: number;
   car: string;
   mat: number;
  ngOnInit() {}
 
    close(){
     this.isShown= false;} 


     openDialog( data1): void {
      
      const d : number=data1.id;
      this.element=Matricules.find(x=>x.id==d);
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '450px',
        data: {id: this.element.id, idMat: this.element.idMat, car: this.element.car,mat:this.element.mat,data1}
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











