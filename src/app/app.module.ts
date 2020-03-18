import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { TableListComponent } from "./table-list/table-list.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./login/login.component";
import { AgmCoreModule } from "@agm/core";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { MatDialogModule } from "@angular/material";
import { AngularFireModule } from '@angular/fire';
import{AngularFireAuthModule} from '@angular/fire/auth';
import{AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from "./firebase.service";
import { SignupComponent } from './signup/signup.component';
import { AdminAddCarComponent } from './admin-add-car/admin-add-car.component';
import { UserReservationComponent } from './user-reservation/user-reservation.component';
import { UserContactComponent } from './user-contact/user-contact.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    AdminAddCarComponent,
    UserReservationComponent,
    UserContactComponent,
    AdminContactComponent,
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
