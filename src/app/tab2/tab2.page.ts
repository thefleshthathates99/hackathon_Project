import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    usernameDisplay = "";
    loginCheck = "";

  constructor(private storage: Storage) {
    storage.get("username").then(val => {
        this.usernameDisplay = val;
      });
      storage.get("checkLogin").then(val => {
        this.loginCheck = val;
      });
  }

  newsData = [
    {
        eventTitle: "Hackathon",
        userPosted: "Griffith University",
        details: "event details data here"
    },
    {
      eventTitle: "Hays Recruitment: Looking for IT Graduates",
      userPosted: "Hays Recruitment",
      details: "event details data here"
  },
  {
      eventTitle: "Ironbark Software: Looking for Developers",
      userPosted: "Ironbark Software",
      details: "event details data here"
  },
  {
      eventTitle: "MedicTech: Look for Surgeons",
      userPosted: "Griffith - MedicTech",
      details: "event details data here"
  }
  ];


}
