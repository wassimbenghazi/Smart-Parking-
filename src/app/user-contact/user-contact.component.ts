import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from 'app/firebase.service';

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.scss']
})
export class UserContactComponent implements OnInit,AfterViewInit {

  constructor(private firestore: AngularFirestore,private firebaseService: FirebaseService) { }
  licensePlates=[]
  dataSource:any[] 
  displayedColumns: string[] = ['Type Car', 'license Plate number', 'verification status'];
  ngOnInit() {}
  loadData(){
    this.firestore.collection("LicensePlates").ref.where("id", "==", this.firebaseService.currentUser.id).onSnapshot(snap=>{ console.log(snap)
      snap.forEach(userRef => {
          console.log("LicensePlates", userRef.data());
          this.licensePlates.push( userRef.data() as any  )

          console.log("LicensePlates",this.licensePlates);
          this.dataSource = this.licensePlates
          })
        })
        return this.dataSource
      }
  ngAfterViewInit() {
                      this.dataSource=this.loadData()
                    }
      
}
