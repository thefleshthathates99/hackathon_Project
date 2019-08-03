import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private storage: Storage) {}

   username = "";
   password = "";
   degree = "";
   checkLogin = "false";

   login(){
    this.storage.remove("username");

    this.storage.set("username", "");
    this.storage.set('checkLogin', "");
    
    if (this.username == "admin" && this.password == "admin"){
      this.storage.set("username", "Zane (Admin)");
      this.storage.set("degree", this.degree);
      this.checkLogin = "true";
      this.storage.set('checkLogin', "admin");
      console.log("succc");
    }
    if (this.username == "user" && this.password == "DoIt"){
      this.storage.set("username", "Arin Hanson (Student)");
      this.storage.set("degree", this.degree);
      this.checkLogin = "true";
      this.storage.set('checkLogin', "non");
      console.log("succc");
    }
  }

  logout(){
    this.checkLogin = "false";
    this.storage.remove("username");
  }

}
