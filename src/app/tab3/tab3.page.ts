import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    collectedDegrees = Observable;
    foundDegrees;
    returnDegrees = [];

  constructor(private storage: Storage, public httpClient: HttpClient) {
    // this.collectedDegrees = this.httpClient.get('https://degrees.griffith.edu.au/rest-api/v3/programTitles?keyword=Bachelor&studentType=Domestic&academicCareerNames=Undergraduate&currentPage=10&pageSize=10');
    // this.collectedDegrees
    // .subscribe(data => {
    //   console.log(data);
    //   this.foundDegrees = data;
    //   for(let jj = 0; jj < this.foundDegrees.records.length; jj++){
    //     this.returnDegrees.push(this.foundDegrees.records[jj].title)
    //   }
    //   console.log(this.returnDegrees);
    // });
    
  }
    
   username = "";
   password = "";
   degree = "";
   checkLogin = "false";
   
   

   login(){
    this.storage.remove("username");

    this.storage.set("username", "");
    this.storage.set('checkLogin', "");
    
    if (this.username == "s5072430" && this.password == "admin"){
      this.storage.set("username", "Zane (Admin)");
      this.storage.set("degree", this.degree);
      this.checkLogin = "true";
      this.storage.set('checkLogin', "admin");
      console.log("succc");
    }
    if (this.username == "s102496" && this.password == "DoIt"){
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
