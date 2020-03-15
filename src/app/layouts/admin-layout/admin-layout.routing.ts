import { Routes } from "@angular/router";

import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { AuthGuard } from "app/auth/auth.guard";

export const AdminLayoutRoutes: Routes = [

    
  { path: "user-profile", component: UserProfileComponent, canActivate:[AuthGuard], data: {roles: ["user", "admin"]} },
  { path: "table-list", component: TableListComponent,  canActivate:[AuthGuard], data: {roles: ["user", "admin"]}},
  { path: "notifications", component: NotificationsComponent, canActivate:[AuthGuard], data: {roles: ["user", "admin"]}}
];
