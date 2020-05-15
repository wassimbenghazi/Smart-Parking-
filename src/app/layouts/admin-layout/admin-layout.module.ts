import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material";
import{MatTableModule} from "@angular/material";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent, DialogOverviewExampleDialog } from "../../table-list/table-list.component";
import { NotificationsComponent } from "../../notifications/notifications.component";


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatCardModule

  
} from "@angular/material";
import { UserContactComponent } from "app/user-contact/user-contact.component";
import { UserReservationComponent } from "app/user-reservation/user-reservation.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatCardModule
  ],
  declarations: [UserContactComponent,
    UserProfileComponent,
    TableListComponent,
    NotificationsComponent, UserReservationComponent,DialogOverviewExampleDialog
    
  ],
  entryComponents: [DialogOverviewExampleDialog
    
  ],
})
export class AdminLayoutModule {}
