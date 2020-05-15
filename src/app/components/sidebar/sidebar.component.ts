import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "app/firebase.service";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/admin/user-profile",
    title: "add a new car",
    icon: "directions_car",
    class: "",
    
  },  {
    path: "/admin/details",
    title: "details",
    icon: "content_paste",
    class: ""
  },
  {
    path: "/admin/table-list",
    title: "table of users",
    icon: "content_paste",
    class: ""
  },
  {
    path: "/admin/reclamations",
    title: "Contact",
    icon: "assignment",
    class: ""
  },
  {
    path: "/admin/notifications",
    title: "Notifications",
    icon: "notifications",
    class: ""
  },
 
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private firebaseService:FirebaseService) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
  logout(){this.firebaseService.logOut();}
}
