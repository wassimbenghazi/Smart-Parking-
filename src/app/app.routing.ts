import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthGuard } from "./auth/auth.guard";
import { LoginGuard } from "./auth/login.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
    
  },
  {
    path: "login",
    component:LoginComponent, canActivate:[LoginGuard],
    pathMatch: "full"
  },
  {
    path: "register", canActivate:[LoginGuard],
    component:SignupComponent,
    pathMatch: "full"
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "admin", canActivate:[AuthGuard]
        ,data: {roles: ["user", "admin"]},
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
      }
    ]
  },
  { path: "**", component:PageNotFoundComponent, pathMatch: "full" }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
