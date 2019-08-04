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
        user: "Jacob Stanley",
        details: "employment details data here"
    },
    {
      eventTitle: "Hays Recruitment: What Tech employers are looking for!",
      userPosted: "Hays Recruitment",
      user: "Cheryl Daniels",
      details: "employment details data here"
  },
  {
      eventTitle: "Griffith Research: The latest in Griffith IT and Computer Science Research",
      userPosted: "Ironbark Software",
      user: "Michael Quick",
      details: "employment details data here"
  },
  {
      eventTitle: "Griffith MedicTech: Advancements made in 2019",
      userPosted: "Griffith - MedicTech",
      user: "Christine Arnold",
      details: "employment details data here"
  }
  ];


}
